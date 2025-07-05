# 🛍️ Auction Bid App:"AuctionGallery"

[Live Site 🌐](https://spontaneous-raindrop-1dcafa.netlify.app/)

AuctionGallery is an interactive **React-based Auction Platform** where users can browse active auction items, place bids, and manage a favorites list. Designed to match Figma specifications precisely, the app features real-time bid data, JSON-based item loading, toast notifications, and dynamic UI updates.

---

## 🎯 Features

### 🧭 Navbar


- Styled to match Figma exactly
- Includes:
  - Logo
  - Navigation menu (as per Figma)
  - Styled button (as per Figma)

### 🖼️ Banner Section

- Eye-catching banner with:
  - Centered heading and description
  - Styled background and layout as per Figma

### 📂 Bid Items JSON

- Data loaded from a static JSON file (`public/bidItems.json`)
- Each item includes:
  - `id`
  - `title`
  - `description`
  - `currentBidPrice`
  - `timeLeft`
  - `bidsCount`
  - `image`

### 🏷️ Active Auctions Section

- Displays 6 bid items in card layout
- Each card shows:
  - 🖼️ Image
  - 🏷️ Item Name
  - 💰 Current Bid Price
  - ⏳ Time Left
  - ❤️ "Bid Now" button

### ❤️ Favorite Items Section

- Initially shows:
  - Section Title
  - Message: "No items"
  - Total amount: 0

- After clicking the ❤️ button:
  - Item is added to favorites list
  - Displayed:
    - Item Name
    - Current Bid Price
    - Bids Count
    - ❌ Remove Button

- Automatically updates:
  - Total Price (sum of current bid prices)

- **Bonus Logic:**
  - ❤️ Button becomes:
    - Disabled
    - Red-colored
    - Cursor: `not-allowed`

- ❌ Button:
  - Removes item from favorites
  - Deducts the item's price from the total

### 📦 React-Toastify Integration

- Shows toast message when an item is added to favorites

### 📊 Bid Data Table

- Shows all bid items inside a responsive `<table>` layout
- Columns:
  - Image, Name, Price, Time Left, Bids Count, Action

---


