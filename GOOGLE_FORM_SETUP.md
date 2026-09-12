# Google Form & Centralized Sheet Setup Guide
### For DietMed Clinical Academy • Admissions Desk (`reshnutriclinic@gmail.com`)

This guide explains how to set up your **single centralized Google Form**, link it to **one Google Sheet with automatic timestamps**, and turn on **instant email notifications** to `reshnutriclinic@gmail.com`.

---

## Step 1: Create the Google Form (2 Minutes)

1. Log into your Gmail account: **`reshnutriclinic@gmail.com`**.
2. Go to [forms.google.com](https://forms.google.com) and click **Blank form (+)**.
3. Set the Form Title:
   - **Title**: `DietMed Clinical Academy - 45-Day Internship Application`
   - **Description**: `Official candidate registration for the 45-day intensive clinical dietitian internship led by Dt. Sk. Reshma.`
4. Add these questions:
   - **1. Full Legal Name** (Short answer, Required)
   - **2. Email Address** (Short answer, Required)
   - **3. Mobile / WhatsApp Number** (Short answer, Required)
   - **4. Highest Qualification / Academic Background** (Dropdown or Multiple Choice, Required):
     - `B.Sc. Nutrition & Dietetics (Final Year / Graduate)`
     - `M.Sc. Clinical Nutrition / Food Science`
     - `Post Graduate Diploma in Dietetics (PGDD)`
     - `Practicing Dietitian / Career Switcher`
     - `MBBS / BAMS / Allied Healthcare Professional`
   - **5. Preferred 1-on-1 Private Desk Meeting Slot** (Multiple Choice, Required):
     - `Morning Slot (09:30 AM – 01:00 PM IST)`
     - `Evening Slot (05:30 PM – 09:00 PM IST)`
   - **6. Career Goal / Statement of Purpose (SOP)** (Paragraph, Required)
   - **7. 45-Day Clinical Internship Commitment** (Checkboxes, Required):
     - `I agree to submit clinical patient K-Sheets and attend scheduled 1-on-1 viva defense.`

---

## Step 2: Link to ONE Single Google Sheet (Automatic Timestamps)

1. In your Google Form, click the **Responses** tab at the top.
2. Click **Link to Sheets** (the green spreadsheet icon).
3. Choose **"Create a new spreadsheet"** and name it:
   - `DietMed Internship Admissions Registry (2024-2025)`
4. Click **Create**.

> [!NOTE]
> Google Sheets will automatically create a **`Timestamp`** column as Column A! Every time any student registers, the date, hour, minute, and second of submission is permanently recorded. You will have all student records in this **single spreadsheet** to filter, verify, and re-check anytime!

---

## Step 3: Turn on Instant Gmail Notifications

To receive an email alert at `reshnutriclinic@gmail.com` whenever any new student registers:
1. In your Google Form, stay on the **Responses** tab.
2. Click the **three dots menu (⋮)** on the right.
3. Click **"Get email notifications for new responses"**.
4. You will see a confirmation: *"Email notifications enabled"*.

Now, every time a student applies, Google will automatically email **`reshnutriclinic@gmail.com`** instantly!

---

## Step 4: Add Your Form to the Website

1. In your Google Form, click the purple **Send** button at the top right.
2. Click the **Embed (`< >`)** tab.
3. Copy the URL inside `src="..."` (e.g., `https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform?embedded=true`).
4. Open [`sections/6-apply.html`](file:///c:/Users/ddiks/Documents/reshmanutriclinic/reshmanutiriclinic/sections/6-apply.html) in this project.
5. Replace the placeholder URL in `src="..."` on line 58 with your copied link.
6. Double-click `build.bat` (or run `python build.py`).
7. Your Google Form is now live and embedded directly on your website!
