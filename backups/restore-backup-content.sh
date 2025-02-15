#!/bin/bash

# Fill in these variables with the production values
STRAPI_CLOUD_URL=https://energized-charity-48b64f9469.strapiapp.com
STRAPI_API_KEY_RESTORE=
BACKUP_DATE=2025-02-14

# Check if jq is installed
if ! command -v jq &> /dev/null
then
    echo "❌ Error: 'jq' is not installed. Please install jq to proceed."
    echo "🔹 Ubuntu/Debian: sudo apt update && sudo apt install jq -y"
    echo "🔹 macOS (Homebrew): brew install jq"
    echo "🔹 Windows: Download from https://stedolan.github.io/jq/download/"
    exit 1
fi

# Backup file (update the date)
BACKUP_FILE="content/backup_content_$BACKUP_DATE.json"

# Check if the file exists
if [ ! -f "$BACKUP_FILE" ]; then
  echo "Error: Backup file not found: $BACKUP_FILE"
  exit 1
fi


# Restore each entry (modify based on your data structure)
jq -c '.data[]' "$BACKUP_FILE" | while read -r item; do
  curl -X POST "$STRAPI_CLOUD_URL/api/pages" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $STRAPI_API_KEY" \
    --data-raw "$item"
done

echo "Restore complete!"