# 📊 Google Sheets Integration Setup

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet named "Psychology Quiz Responses"
3. Name the first sheet "Responses"

## Step 2: Create Column Headers

In the first row, add these headers:
```
Name | Date | Time | Mood | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Happy% | Calm% | Anxious% | Sad%
```

## Step 3: Create Google Apps Script Webhook

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Replace all code with this:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Prepare row data
    const row = [
      data.name,
      data.date,
      data.time,
      data.mood,
      data.answers[0] || '',
      data.answers[1] || '',
      data.answers[2] || '',
      data.answers[3] || '',
      data.answers[4] || '',
      data.answers[5] || '',
      data.answers[6] || '',
      data.answers[7] || '',
      data.answers[8] || '',
      data.answers[9] || '',
      data.scores.Happy || 0,
      data.scores.Calm || 0,
      data.scores.Anxious || 0,
      data.scores.Sad || 0
    ];
    
    // Append row to sheet
    sheet.appendRow(row);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved to Google Sheet'
    })).setMimeType(ContentService.MimeType.JSON);
  } catch(error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **"Deploy" → "New Deployment"**
4. Select type: **Web app**
5. Execute as: Your account
6. Who has access: **Anyone**
7. Click **Deploy**
8. Copy the **Deployment URL** (looks like: `https://script.google.com/macros/d/...`)

## Step 4: Add Webhook URL to Quiz App

1. Open `config.js` in your editor
2. Replace `YOUR_GOOGLE_SHEET_WEBHOOK_URL` with your actual deployment URL from Step 3

## Step 5: Done! ✨

Now when users complete the quiz:
- ✓ Their responses are automatically sent to Google Sheets
- ✓ All data is captured and organized
- ✓ You can analyze results in real-time

---

## To Update Your Apps Script Webhook

If you need to redeploy after making changes:
1. In Apps Script, go to your old deployment
2. Copy the Deployment ID
3. Click "Manage deployments"
4. Update existing deployment (don't create a new one)
5. Keep the same URL

---

## Troubleshooting

**Q: Nothing is appearing in Google Sheets?**
- Check browser console (F12) for errors
- Verify the webhook URL is correct
- Make sure Apps Script is deployed as "Web app"

**Q: Getting CORS error?**
- This is normal - Google Apps Script handles it automatically
- The data will still be saved

**Q: Want to change the sheet name?**
- In your Apps Script, change `sheet.appendRow(row)` to specify sheet name:
```javascript
const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Responses");
```
