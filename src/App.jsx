import './App.css'

function App() {
  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#hero">
            Venus
          </a>

          <nav className="nav">
            <a href="#about">關於我</a>
            <a href="#journey">歷程</a>
            <a href="#contact">聯絡我</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="section hero-section">
          <div className="container hero-layout">
            <div className="hero-content">
              <p className="eyebrow">個人品牌網站</p>

              <h1 className="hero-title">
                <span>不是因為厲害才開始，</span>
                <span>是因為開始才厲害。</span>
              </h1>

              <p className="hero-subtitle">
                我是一位具備 10 年以上職場實戰經驗的辦公室資料整理與報表自動化實作者，
                擅長把混亂資料、重複流程與跨部門資訊，整理成可追蹤、可查詢、可支援決策的工作系統。
              </p>

              <div className="hero-badges">
                <span>10+ 年職場實戰</span>
                <span>資料整理</span>
                <span>報表自動化</span>
                <span>AI 協作學習</span>
              </div>

              <div className="hero-actions">
                <a className="button primary-button" href="#journey">
                  查看我的歷程
                </a>
                <a className="button secondary-button" href="#contact">
                  聯絡我
                </a>
              </div>
            </div>

            <div className="hero-card-panel">
              <article className="hero-mini-card">
                <strong>資料整理</strong>
                <span>把分散資料整理成可分析資料表</span>
              </article>

              <article className="hero-mini-card">
                <strong>報表自動化</strong>
                <span>降低重複整理時間，提高查詢效率</span>
              </article>

              <article className="hero-mini-card">
                <strong>流程改善</strong>
                <span>讓跨部門資訊更清楚、更可追蹤</span>
              </article>
            </div>
          </div>
        </section>

<section id="about" className="section about-section">
  <div className="container about-layout">
    <div>
      <p className="section-label">About Me</p>
      <h2>關於我</h2>

      <p>
        我是一位具備 10 年以上職場實戰經驗的辦公室資料整理與報表自動化實作者，
        擁有現場與後台雙重視角，熟悉跨部門資料協作、報表整理與流程支援。
      </p>

      <p>
        我的能力不是一開始就完整，而是從真實職場問題出發，
        透過 Excel、Power Query、Google Sheets、GAS 與 AI 工具，
        一步一步把混亂資料、重複作業與資訊落差整理成更清楚的流程。
      </p>
    </div>

    <div className="about-highlight-box">
      <h3>我的轉職加分特質</h3>

      <div className="about-tags">
        <span>10+ 年職場實戰</span>
        <span>現場與後台雙視角</span>
        <span>問題驅動</span>
        <span>自學成長</span>
        <span>細心可靠</span>
        <span>流程優化</span>
        <span>資料整理</span>
        <span>AI 協作學習</span>
      </div>
    </div>
  </div>
</section>

    <section id="skills" className="section soft-section">
  <div className="container">
    <p className="section-label">Core Skills</p>
    <h2>核心能力</h2>

    <div className="card-grid">
      <article className="card">
        <h3>資料整理</h3>
        <p>
          將分散、格式不一、難以閱讀的資料，整理成可以查詢、分析與追蹤的資料表。
        </p>
      </article>

      <article className="card">
        <h3>Excel 報表</h3>
        <p>
          使用樞紐分析、函數與表格結構，建立主管可以快速查閱的營運與績效報表。
        </p>
      </article>

      <article className="card">
        <h3>Power Query 整合</h3>
        <p>
          整合多頁活頁簿工作表，進行資料清洗、欄位整理與合併，降低人工整理時間。
        </p>
      </article>

      <article className="card">
        <h3>Google Sheets 協作</h3>
        <p>
          協助跨部門資料共用、更新與追蹤，讓資訊不再分散在不同人手上。
        </p>
      </article>

      <article className="card">
        <h3>GAS 自動化</h3>
        <p>
          搭配 Google 表單與 Google Sheets，改善重複詢問、人工彙整與通知流程。
        </p>
      </article>

      <article className="card">
        <h3>AI 協作學習</h3>
        <p>
          使用 AI 協助拆解問題、整理學習路徑與輔助實作，持續擴充工具整合能力。
        </p>
      </article>
    </div>
  </div>
</section>    

<section id="problems" className="section">
  <div className="container">
    <p className="section-label">Problems I Solve</p>
    <h2>我解決什麼問題</h2>

    <div className="card-grid">
      <article className="card">
        <h3>混亂資料難以查詢</h3>
        <p>
          將分散在不同檔案、不同工作表或不同來源的資料，整理成更清楚、可追蹤的資料結構。
        </p>
      </article>

      <article className="card">
        <h3>重複作業耗費時間</h3>
        <p>
          透過 Excel、Power Query 與 Google Sheets，減少重複複製、貼上、整理與彙總的時間。
        </p>
      </article>

      <article className="card">
        <h3>跨部門資訊落差</h3>
        <p>
          協助整理需求、統一資料格式與追蹤資訊流向，讓不同部門之間更容易對齊。
        </p>
      </article>

      <article className="card">
        <h3>報表查詢不方便</h3>
        <p>
          將年度或多來源資料整理成主管可以快速查看的報表，支援營運追蹤與決策參考。
        </p>
      </article>
    </div>
  </div>
</section>

<section id="results" className="section soft-section">
  <div className="container">
    <p className="section-label">Selected Results</p>
    <h2>代表成果</h2>

    <div className="result-list">
      <article className="result-card">
        <div className="result-number">01</div>

        <div>
          <h3>跨區域門市年度樞紐績效報表</h3>

          <p>
            <strong>痛點：</strong>
            年度營運資料分散，主管查詢績效狀況時需要花時間整理與比對。
          </p>

          <p>
            <strong>做法：</strong>
            使用 Excel 與樞紐分析整理年度資料，建立可以快速查詢的績效報表。
          </p>

          <p>
            <strong>成果：</strong>
            讓主管可以更快查看跨區域門市績效狀況，降低手動整理與重複查詢成本。
          </p>
        </div>
      </article>

      <article className="result-card">
        <div className="result-number">02</div>

        <div>
          <h3>Power Query 多頁工作表資料整合</h3>

          <p>
            <strong>痛點：</strong>
            多頁活頁簿工作表資料分散，格式不一致，人工整理容易耗時且出錯。
          </p>

          <p>
            <strong>做法：</strong>
            使用 Power Query 進行資料清洗、欄位整理、合併與轉換。
          </p>

          <p>
            <strong>成果：</strong>
            將分散資料整理成可分析、可查詢的資料表，讓後續報表製作更有效率。
          </p>
        </div>
      </article>

      <article className="result-card">
        <div className="result-number">03</div>

        <div>
          <h3>GAS 自動化問卷系統</h3>

          <p>
            <strong>痛點：</strong>
            跨部門需求經常重複詢問，人工彙整容易造成資訊遺漏。
          </p>

          <p>
            <strong>做法：</strong>
            使用 Google 表單、Google Sheets 與 Google Apps Script 設計自動化問卷流程。
          </p>

          <p>
            <strong>成果：</strong>
            降低重複詢問與手動整理時間，讓資訊收集與追蹤更清楚。
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="journey" className="section journey-section">
  <div className="container">
    <p className="section-label">Career Journey</p>
    <h2>職場與學習歷程</h2>

    <p className="section-intro">
      我的能力不是一開始就完整，而是從一個問題、一個任務、一個成果慢慢累積。
      從現場經驗到後台支援，再到資料整理、流程改善與 AI 協作學習，
      每一步都來自真實職場需求。
    </p>

    <div className="timeline">
      <article className="timeline-item">
        <div className="timeline-number">01</div>
        <div className="timeline-content">
          <h3>現場經驗：理解第一線真正需要什麼</h3>
          <p>
            具備一線門市實戰經驗，理解現場作業節奏、資料回報限制與實際執行困難。
          </p>
        </div>
      </article>

      <article className="timeline-item">
        <div className="timeline-number">02</div>
        <div className="timeline-content">
          <h3>後台支援：處理跨部門資料與流程銜接</h3>
          <p>
            在後台支援角色中，協助跨部門資料協調、報表整理、門市維護、人力調動與採買等工作。
          </p>
        </div>
      </article>

      <article className="timeline-item">
        <div className="timeline-number">03</div>
        <div className="timeline-content">
          <h3>報表整理：讓資料變成可以查詢的依據</h3>
          <p>
            透過 Excel、樞紐分析與資料表結構，將年度與跨區域資料整理成主管可以快速查閱的報表。
          </p>
        </div>
      </article>

      <article className="timeline-item">
        <div className="timeline-number">04</div>
        <div className="timeline-content">
          <h3>流程改善：用工具降低重複作業</h3>
          <p>
            使用 Power Query、Google Sheets 與 GAS，改善多頁工作表整合、重複詢問與人工彙整流程。
          </p>
        </div>
      </article>

      <article className="timeline-item">
        <div className="timeline-number">05</div>
        <div className="timeline-content">
          <h3>AI 協作學習：持續擴充解決問題的能力</h3>
          <p>
            善用 AI 協助拆解問題、規劃學習路徑與輔助實作，持續學習 Power BI、DAX、Python 等工具。
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<section id="contact" className="section contact-section">
  <div className="container contact-layout contact-single">
    <p className="section-label contact-label">Contact</p>
    <h2>聯絡我</h2>

    <p>
      如果你正在尋找能整理資料、優化流程、協助報表自動化，
      並且願意持續學習新工具的人，歡迎進一步了解我的職場經驗與實作成果。
    </p>

    <div className="contact-actions">
      <a className="button contact-button" href="mailto:ingrid.cyj@gmail.com">
        Email 聯絡我
      </a>
    </div>
  </div>
</section>
      </main>

<footer className="site-footer">
  <div className="container footer-inner">
    <p>© 2026 Venus. 個人品牌網站 MVP.</p>
  </div>
</footer>
    </div>
  )
}

export default App