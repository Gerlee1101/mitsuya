"use client"

export const Ceo = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16  bg-white/80 dark:bg-slate-900/80">
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            ブランド哲学 
          </h2>
       
        </div>

        {/* Japanese text */}
        <div className="rounded-2xl border border-slate-200 bg-white/90 dark:border-slate-700 dark:bg-slate-900/80 p-6 md:p-8 space-y-4 text-sm md:text-base leading-relaxed">
          <p>
            モンゴルには13世紀、アルンゴー妃の「五本の矢」の教えがあり、
            日本には16世紀、毛利元就の「三本の矢」の逸話があります。
          </p>
          <p>
            いずれの物語も、「団結こそ最大の力である」という普遍的な価値を象徴しています。
          </p>
          <p>
            「Mitsuya（三矢）」というブランド名は、この哲学に基づき、
            <strong>人・品質・健康（People・Quality・Health）</strong>
            という三つの基本理念を体現しています。
          </p>
          <p>
            三つの要素が結びつくことで折れない力を生むように、Mitsuyaは人々、商品の品質、健康を一体化させ、
            モンゴルと日本の協力と信頼の力を象徴するブランドとなっています。
          </p>
        </div>

        {/* CEO Message */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/90 dark:border-slate-700 dark:bg-slate-900/90 p-6 md:p-8 space-y-5 text-sm md:text-base leading-relaxed">
          <div className="space-y-1">
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              代表メッセージ
            </h3>
          
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              Mitsuya Nippon Storeは、日本の高品質な食品とライフスタイル文化をモンゴル市場へ届けるという使命のもと設立されました。
            </p>
            <p>
              私は2019年より日本食品の輸入および流通事業に携わり、日本メーカーの品質管理、誠実なものづくり精神、そして消費者第一の価値観に深い信頼を築いてまいりました。
              その経験を基盤として、日本食品専門店「日本食品センター」を創業し、モンゴル国内における日本食品市場の成長に取り組んできました。
            </p>
            <p>
              近年、モンゴルでは健康志向の高まりとともに、安全で高品質な食品への需要が急速に拡大しています。
              私たちは単なる商品販売にとどまらず、日本基準の品質、サービス文化、そして持続可能なライフスタイルを提供するリテールプラットフォームの構築を目指しています。
            </p>
            <p>
              2026年に新たに立ち上げた「Mitsuya」ブランドでは、People・First・Health
              の理念のもと、人々の健康と生活価値向上を中心に据えた事業展開を進めております。
            </p>
            <p>
              今後は、日本企業との長期的パートナーシップをさらに強化し、安定したサプライチェーンと多店舗展開を通じて、モンゴル市場における日本食品流通のリーディングカンパニーとなることを目指します。
            </p>
            <p>
              Mitsuya Nippon Storeは、日本とモンゴルを結ぶ信頼あるビジネス架け橋として、持続的な成長と社会的価値の創出に挑戦し続けてまいります。
            </p>
            <p>皆様のご支援とご協力を賜りますよう、心よりお願い申し上げます。</p>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-700 text-right space-y-1">
            <p className="text-xs text-muted-foreground">代表取締役 CEO</p>
            <p className="text-base md:text-lg font-semibold text-foreground">
              マグサルジャブ・ナツァグドルジ
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

