#!/bin/bash

# SMTP Email Sender Script
# Usage: ./send_email.sh

# SMTP Configuration
SMTP_SERVER="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Email Configuration
FROM="your-email@gmail.com"
TO="recipient@example.com"
SUBJECT="Test Email from Shell Script"
BODY="This is a test email sent from a shell script using SMTP."

# Create email content
EMAIL_CONTENT="From: $FROM
To: $TO
Subject: $SUBJECT

$BODY"

# Function to send email using curl
send_email_curl() {
    echo "$EMAIL_CONTENT" | curl --ssl-reqd \
        --url "smtps://$SMTP_SERVER:$SMTP_PORT" \
        --user "$SMTP_USER:$SMTP_PASS" \
        --mail-from "$FROM" \
        --mail-rcpt "$TO" \
        --upload-file -
}
