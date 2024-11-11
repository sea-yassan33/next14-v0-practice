import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Zap, Target, Send } from 'lucide-react'
import AnimatedSection from "./_components/AnimatedSection";
import AnimatedTitle from "./_components/AnimatedTitle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100">
      <main>
        <section className="container mx-auto py-20 text-center">
          <AnimatedTitle />
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            無料相談を予約する
          </Button>
        </section>

        <section className="container mx-auto py-16">
          <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">私たちのサービス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: 'クリエイティブデザイン', description: '目を引くデザインで、あなたのブランドを輝かせます。' },
              { icon: Zap, title: 'ウェブ開発', description: '高速で使いやすいウェブサイトを構築します。' },
              { icon: Target, title: 'マーケティング戦略', description: 'ターゲットに届く効果的な戦略を立案します。' },
              { icon: Send, title: 'デジタル広告', description: 'オンライン上であなたのビジネスを拡大します。' }
            ].map((service, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <service.icon className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-purple-800 mb-2">{service.title}</h3>
                  <p className="text-purple-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <AnimatedSection />

        <section className="container mx-auto py-16 text-center">
          <h2 className="text-3xl font-bold text-purple-800 mb-6">お問い合わせ</h2>
          <p className="text-xl text-purple-600 mb-8">ご質問やご相談がありましたら、お気軽にお問い合わせください。</p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 font-bold py-3 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            お問い合わせはこちら
          </Button>
        </section>
      </main>
    </div>
  );
}
