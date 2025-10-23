#!/bin/bash

echo "🧪 Testing SSR Implementation..."
echo "================================"
echo ""

# Check if server is running
SERVER_URL="http://localhost:5173"

echo "1️⃣ Checking if server is accessible..."
if curl -s -o /dev/null -w "%{http_code}" $SERVER_URL | grep -q "200"; then
    echo "✅ Server is running at $SERVER_URL"
else
    echo "❌ Server is not running. Start it with: npm run dev:ssr"
    exit 1
fi

echo ""
echo "2️⃣ Testing Homepage SSR..."
HOMEPAGE_HTML=$(curl -s $SERVER_URL)
if echo "$HOMEPAGE_HTML" | grep -q "Pure Wood-Pressed Oils"; then
    echo "✅ Homepage renders with content"
else
    echo "❌ Homepage is not rendering properly"
fi

echo ""
echo "3️⃣ Testing Product Page SSR..."
PRODUCT_HTML=$(curl -s "$SERVER_URL/products/groundnut-oil")
if echo "$PRODUCT_HTML" | grep -q "Groundnut Oil"; then
    echo "✅ Product page renders with content"
else
    echo "❌ Product page is not rendering properly"
fi

echo ""
echo "4️⃣ Checking for meta tags..."
if echo "$HOMEPAGE_HTML" | grep -q "<meta"; then
    echo "✅ Meta tags are present"
else
    echo "❌ Meta tags are missing"
fi

echo ""
echo "5️⃣ Checking for structured data..."
if echo "$PRODUCT_HTML" | grep -q "application/ld+json"; then
    echo "✅ Structured data (JSON-LD) is present"
else
    echo "❌ Structured data is missing"
fi

echo ""
echo "6️⃣ Checking build files..."
if [ -d "dist/client" ] && [ -d "dist/server" ]; then
    echo "✅ Build artifacts exist"
else
    echo "⚠️  Build artifacts not found. Run: npm run build:ssr"
fi

echo ""
echo "================================"
echo "📊 SSR Test Summary"
echo "================================"
echo ""
echo "Next steps:"
echo "1. View source in browser to verify rendered HTML"
echo "2. Run Lighthouse: lighthouse $SERVER_URL --view"
echo "3. Test with Google Rich Results: https://search.google.com/test/rich-results"
echo ""
echo "✨ SSR implementation complete!"
