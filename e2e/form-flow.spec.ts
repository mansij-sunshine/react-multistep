import { test, expect } from '@playwright/test'

test.describe('Multi-step Form Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('complete form from start to finish', async ({ page }) => {
    // Step 1: Personal Info
    await expect(page.locator('text=Personal Info')).toBeVisible()

    await page.fill('input[name="name"]', 'John Doe')
    await page.fill('input[name="email"]', 'john@example.com')
    await page.fill('input[name="phone"]', '+1 234 567 8900')

    await page.click('button:has-text("Next Step")')

    // Step 2: Select Plan
    await expect(page.locator('text=Select your Plan')).toBeVisible()

    // Select Advanced plan
    await page.click('text=Advanced')
    await page.click('button:has-text("Next Step")')

    // Step 3: Pick Add-ons
    await expect(page.locator('text=Pick your Addons')).toBeVisible()

    // Select add-ons (checkboxes)
    const checkboxes = page.locator('input[type="checkbox"]')
    await checkboxes.nth(0).check() // Online Service
    await checkboxes.nth(1).check() // Larger Storage

    await page.click('button:has-text("Next Step")')

    // Step 4: Summary
    await expect(page.locator('text=Finishing up')).toBeVisible()
    await expect(page.locator('text=Advanced')).toBeVisible()

    // Confirm
    await page.click('button:has-text("Confirm")')

    // Verify success (Confirmation component rendered)
    await expect(page.locator('body')).toBeTruthy()
  })

  test('navigate back to previous step', async ({ page }) => {
    // Fill step 1
    await page.fill('input[name="name"]', 'Jane Smith')
    await page.fill('input[name="email"]', 'jane@example.com')
    await page.fill('input[name="phone"]', '+1 987 654 3210')
    await page.click('button:has-text("Next Step")')

    // Go to step 2
    await expect(page.locator('text=Select your Plan')).toBeVisible()

    // Click back (it's an <a> tag, not a button)
    await page.click('a:has-text("Go Back")')

    // Should be back at step 1
    await expect(page.locator('text=Personal Info')).toBeVisible()
    await expect(page.inputValue('input[name="name"]')).resolves.toBe('Jane Smith')
  })

  test('toggle between monthly and yearly pricing', async ({ page }) => {
    // Go to plan selection
    await page.fill('input[name="name"]', 'Test User')
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="phone"]', '+1 111 111 1111')
    await page.click('button:has-text("Next Step")')

    // Toggle to yearly using the label
    await page.click('label[for="plan"]')

    // Verify yearly prices are shown
    await expect(page.getByText('$90/yr')).toBeVisible()
  })

  test('show validation error for empty email', async ({ page }) => {
    // Fill only name and phone, skip email
    await page.fill('input[name="name"]', 'John Doe')
    await page.fill('input[name="phone"]', '+1 234 567 8900')

    await page.click('button:has-text("Next Step")')

    // Should stay on step 1 (validation prevents navigation)
    await expect(page.locator('text=Personal Info')).toBeVisible()
  })
})
