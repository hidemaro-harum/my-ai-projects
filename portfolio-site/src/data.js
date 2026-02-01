import { Award, Briefcase, Code, FileText, Layers, Rocket, Zap } from "lucide-react";

export const profile = {
    name: "遠藤 豪麿",
    role: "Business Architect / DX Specialist",
    catchphrase: "事業立ち上げ × AI活用 × 運用設計",
    subCatchphrase: "「0→1」の推進と「仕組み化」の実装で、非連続な成長と持続可能な運用を両立させる。",
    email: "malouch3498@gmail.com", // Placeholder as per plan
    phone: "080-3158-0145", // Placeholder
};

export const highlights = [
    {
        icon: Rocket,
        title: "0→1 事業立ち上げ",
        description: "未整備な環境下での論点整理・合意形成・実行計画化。社員1名から30名規模への組織拡大を主導。",
    },
    {
        icon: Briefcase,
        title: "コンサルティング営業",
        description: "提案から契約、運用定着まで一気通貫で伴走。支店売上を1年で5,000万円から2億円へ4倍増。",
    },
    {
        icon: Layers,
        title: "運用設計・仕組み化",
        description: "業務フローの標準化と自動化（GAS等）により、月間40-60時間の工数削減とミス率低減（5%→1%）を実現。",
    },
];

export const projects = [
    {
        title: "群馬県草津町 電子感謝券導入",
        category: "Web Direction / BPO",
        period: "2025/12 リリース",
        description: "ふるさと納税における電子感謝券（現地決済型返礼品）の導入を支援。利用ガイド、決済POP、運用フロー構築を一括でディレクション。",
        metrics: ["転売防止", "手数料削減", "工数削減"],
        images: ["/images/kusatsu_pop.jpg", "/images/kusatsu_guide.png"],
    },
    {
        title: "AI活用: 業務効率化ツール群",
        category: "AI / Tool Development",
        description: "現場の課題解決のため、自らAIツールを企画・開発。直感的なUIで誰でも高度な最適化が可能に。",
        items: [
            "画像リサイズ＆楽天登録最適化ツール（D&Dで一括処理）",
            "広告分析＆提案自動化レポート生成ツール",
            "社内図解文化浸透のための専用プロンプト設計"
        ],
        image: "/images/ai_tools.png",
    },
    {
        title: "業務自動化 (GAS)",
        category: "Automation",
        description: "正確性が求められる事務作業をGASで自動化。複雑なデータフローをシンプルに。",
        items: [
            "楽天登録CSV変換（複雑な仕様を自動整形）",
            "RPP広告単価自動調整ツール（目安CPCに合わせて自動入札）",
            "Googleドキュメント図解生成機能"
        ],
        metrics: ["月間40-60h削減", "ミス率 5% → 1%"],
        image: "/images/gas_automation.png",
    }
];

export const experience = [
    {
        company: "三ツ目株式会社",
        role: "事業開発 / コンサルティング営業",
        period: "2024.07 - Present",
        details: "社員1号としてふるさと納税支援事業の立ち上げ。正社員12名＋パートナー約20名の体制構築。寄附額4.0倍、ROAS 1,800%達成。",
    },
    {
        company: "有限会社Bizサポート / 株式会社エッグ 東京支店",
        role: "支店立ち上げ / コンサルティング営業",
        period: "2021.05 - 2024.06",
        details: "東京支店立ち上げ。AIコール導入で残業30%削減、品質平準化。",
    },
    {
        company: "やど紫苑亭株式会社",
        role: "総務・経理（旅館立ち上げ）",
        period: "2020.03 - 2021.03",
        details: "高級旅館の開業準備。採用難航の中、期限内に22名を確保し開業へ導く。",
    },
    {
        company: "株式会社リクルートカーセンサー",
        role: "広告営業",
        period: "2017.11 - 2019.12",
        details: "特別賞を連続受賞。クライアント伴走型の提案営業。",
    },
    {
        company: "鳥取トヨタ自動車株式会社",
        role: "営業職",
        period: "2014.04 - 2017.10",
        details: "販売台数を年間8台→32台へ伸長。新人賞、携帯販売1位など受賞多数。",
    },
];

export const skills = [
    { category: "Business", items: ["事業開発", "BPO設計", "チームマネジメント", "営業戦略", "採用計画"] },
    { category: "Technical", items: ["Google Apps Script (GAS)", "Excel/Spreadsheet", "Prompt Engineering", "SEO"] },
    { category: "Tools", items: ["Canva", "Slack", "Backlog", "Chatwork", "Salesforce"] },
];
