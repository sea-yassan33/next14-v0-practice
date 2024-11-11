## 開発環境
```sh
npx create-next-app@14.1.4
Ok to proceed? (y) y
✔ What is your project named? … [プロジェクト名]
✔ Would you like to use TypeScript? …  / Yes
✔ Would you like to use ESLint? …  / Yes
✔ Would you like to use Tailwind CSS? …  / YES
✔ Would you like to use `src/` directory? … No / 
✔ Would you like to use App Router? (recommended) …  / Yes
✔ Would you like to customize the default import alias (@/*)? … No / 
```

## 追加ライブラリ
```sh
## Tailwind Variants
npm install tailwind-variants

## ui.shadcn
npx shadcn@latest init -d
npx shadcn@latest add button
npx shadcn@latest add card 

## ブラウザ依存のライブラリ
npm install framer-motion

## Headless UI
npm install @headlessui/react

## Heroicons
npm install @heroicons/react

```

## V0について
https://v0.dev/

[【Qiita】Vercel v0解説: テキストから始まるAI駆動型UI開発](https://qiita.com/shirochan/items/541126f4c866367b2278)

[【you tube】たった数秒で高品質なUIが作れるAIサービスを紹介します](https://www.youtube.com/watch?app=desktop&v=ctmCLOTpWew)


### V0を使ってホーム画面を作成手順

１．V0のユーザー登録後、以下のプロンプトを投げる
```txt
コーポレートサイトのホーム画面をポップな感じで作成してください。
```

2．V0が以下のプログラムを作成してくれるのでそれをコピペするだけ。
- ※プログラムをコピペする前に追加ライブラリを追加しとく※
```txt
- app/_components/AnimatedSection/index.tsx
- app/_components/AnimatedTitle/index.tsx
- app/page.tsx
```

３．完成
- [サンプル例](https://next14-v0-practice.vercel.app/)

### 参考
- [Next.jsの開発まとめ集](https://qiita.com/sea_news_yass/items/6d09c5a70e7356406f4d)