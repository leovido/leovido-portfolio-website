# Personal Portfolio Website - Christian Leovido

A modern, responsive portfolio website built with the Farcaster design system, featuring a glass morphism aesthetic, purple-blue gradient theme, and Pinterest-style masonry grid layout.

## 🚀 Features

- **Farcaster Design System**: Premium glass morphism UI with purple-blue gradients
- **Pinterest-style Grid**: Resizable masonry layout for portfolio items
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Smooth Animations**: Framer Motion powered interactions and transitions
- **Theme Switching**: Support for Farcaster, Dark, and Light themes
- **Performance Optimized**: Built with Next.js 15 and Tailwind CSS
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Layout**: React Masonry CSS for Pinterest-style grid
- **Icons**: Lucide React
- **Font**: Instrument Sans, Inter

## 🎨 Design System

### Color Palette
- **Background**: `bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20`
- **Cards**: Glass effect with `bg-white/10 backdrop-blur-md border border-white/20`
- **Text**: Primary white, secondary white/70, accent blue-400
- **Interactive**: Purple-blue gradients with hover effects

### Components
- **Glass Cards**: Backdrop blur with subtle borders and shadows
- **Floating Animations**: Subtle movement for hero elements
- **Masonry Grid**: Pinterest-style responsive layout
- **Theme Toggle**: Smooth transitions between themes

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/personal-web3-website-leovido.git
   cd personal-web3-website-leovido
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Portfolio Items

The portfolio showcases various project types:
- **Web3/DeFi**: Trading platforms, NFT marketplaces
- **AI/ML**: Code assistants, analytics platforms
- **Full-stack**: Chat applications, mobile apps
- **DevOps**: Monitoring systems, cloud architecture

## 🎯 Customization

### Adding Portfolio Items
Edit `app/page.tsx` and add items to the `portfolioItems` array:

```javascript
{
  title: "Your Project",
  description: "Project description",
  image: "https://your-image-url.com",
  technologies: ["React", "TypeScript"],
  category: "Web3",
  year: "2024",
  height: "medium"
}
```

### Theme Configuration
Modify theme settings in `tailwind.config.ts` and `app/globals.css`

### Animation Customization
Adjust Framer Motion configurations in component files

## 📦 Build and Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/personal-web3-website-leovido)

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Built with ❤️ using the Farcaster Design System**
