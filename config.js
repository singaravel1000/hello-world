// ===== GOOGLE SHEETS CONFIGURATION =====
// Replace this with your actual Google Apps Script deployment URL
// See GOOGLE_SHEETS_SETUP.md for instructions on how to get this URL

const GOOGLE_SHEET_CONFIG = {
    // Your Google Apps Script web app URL
    webhookUrl: 'https://script.google.com/macros/s/AKfycbz1kQKiVo4qxTcu-aFcH-hzwPay_EnN1zBAY1riMAepzmbm4tYgn9f9nAO_Fb1eshMXmQ/exec',
    
    // Enable/disable Google Sheets integration
    enabled: true, // Set to true after adding your webhook URL// Set to true to log data instead of sending to Google Sheets
    // Sheet configuration
    sheetName: 'Responses',
    
    // Test mode (logs data instead of sending)
    testMode: false
};

// Function to send data to Google Sheet
async function sendToGoogleSheet(quizData) {
    if (!GOOGLE_SHEET_CONFIG.enabled) {
        console.log('Google Sheets integration is disabled. Enable it in config.js');
        return;
    }

    if (GOOGLE_SHEET_CONFIG.testMode) {
        console.log('TEST MODE: Would send this data to Google Sheet:', quizData);
        return;
    }

    try {
        // Create FormData to avoid CORS preflight request
        const formData = new FormData();
        formData.append('data', JSON.stringify(quizData));
        
        const response = await fetch(GOOGLE_SHEET_CONFIG.webhookUrl, {
            method: 'POST',
            body: formData
        });

        const result = await response.text();
        console.log('✅ Data sent to Google Sheet:', result);
        return result;
    } catch (error) {
        console.error('❌ Error sending data to Google Sheet:', error);
        // Don't throw - let the quiz continue even if Google Sheets fails
    }
}
