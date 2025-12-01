#!/bin/bash

BASE_URL="http://localhost:3000"
EMAIL="test@example.com"
PASSWORD="password123"

echo "1. Registering user..."
REGISTER_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/register" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")
echo "Response: $REGISTER_RESPONSE"

echo -e "\n2. Logging in..."
LOGIN_RESPONSE=$(curl -s -X POST "$BASE_URL/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"email\": \"$EMAIL\", \"password\": \"$PASSWORD\"}")
echo "Response: $LOGIN_RESPONSE"

ACCESS_TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)
REFRESH_TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"refresh_token":"[^"]*' | cut -d'"' -f4)

if [ -z "$ACCESS_TOKEN" ]; then
  echo "Failed to get access token"
  exit 1
fi

echo -e "\n3. Accessing protected profile..."
PROFILE_RESPONSE=$(curl -s -X GET "$BASE_URL/users/profile" \
  -H "Authorization: Bearer $ACCESS_TOKEN")
echo "Response: $PROFILE_RESPONSE"

echo -e "\n4. Refreshing token..."
REFRESH_RESPONSE=$(curl -s -X GET "$BASE_URL/auth/refresh" \
  -H "Authorization: Bearer $REFRESH_TOKEN")
echo "Response: $REFRESH_RESPONSE"

NEW_ACCESS_TOKEN=$(echo $REFRESH_RESPONSE | grep -o '"access_token":"[^"]*' | cut -d'"' -f4)

if [ -z "$NEW_ACCESS_TOKEN" ]; then
  echo "Failed to refresh token"
  exit 1
fi

echo -e "\n5. Accessing protected profile with new token..."
PROFILE_RESPONSE_2=$(curl -s -X GET "$BASE_URL/users/profile" \
  -H "Authorization: Bearer $NEW_ACCESS_TOKEN")
echo "Response: $PROFILE_RESPONSE_2"

echo -e "\nVerification Complete!"
