---
templateKey: about-page
title: About the Model
---
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Opening the Future</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&amp;display=swap">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: white;
        }

        .container {
            max-width: 1024px;
            margin: 0 auto;
            padding: 0 1rem;
        }

        .font-roboto-slab {
            font-family: 'Roboto Slab', serif;
        }

        .text-primary {
            color: #1b1d32;
        }

        /* Hero Section */
        .hero-section {
            background: linear-gradient(135deg, #fff7ed 0%, #fefce8 100%);
            padding: 4rem 1rem;
        }

        .hero-title {
            font-size: 2rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 3rem;
            line-height: 1.3;
        }

        @media (min-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }
        }

        .hero-card {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(8px);
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            padding: 2rem;
        }

        .hero-description {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            color: #374151;
        }

        .grid-2 {
            display: grid;
            gap: 1.5rem;
            color: #374151;
        }

        @media (min-width: 768px) {
            .grid-2 {
                grid-template-columns: 1fr 1fr;
            }
        }

        /* How it Works Section */
        .how-it-works {
            padding: 4rem 1rem;
            background-color: #f9fafb;
        }

        .section-title {
            font-size: 1.875rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
            .section-title {
                font-size: 2.25rem;
            }
        }

        .diagram-container {
            text-align: center;
            margin-bottom: 3rem;
        }

        .diagram-image {
    width: 100%;
    max-width: 697px;
    height: auto;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

        .publishers-title {
            font-size: 1.5rem;
            font-weight: 700;
            text-align: center;
            margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
            .publishers-title {
                font-size: 1.875rem;
            }
        }

        .press-grid {
            display: grid;
            gap: 1.5rem;
        }

        @media (min-width: 768px) {
            .press-grid {
                grid-template-columns: repeat(3, 1fr);
            }
        }

        .press-card {
            background: white;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            text-align: center;
            transition: box-shadow 0.3s ease;
        }

        .press-card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .logo-container {
            height: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
        }

        .logo-image {
            max-height: 4rem;
            width: auto;
        }

        .press-title {
            font-weight: 700;
            margin-bottom: 0.75rem;
        }

        .visit-button {
            background-color: #EFDA3B;
            color: black;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
            justify-content: center;
            transition: background-color 0.2s ease;
        }

        .visit-button:hover {
            background-color: #92830c;
        }

        .external-icon {
            width: 1rem;
            height: 1rem;
        }

        /* Background Section */
        .background-section {
            padding: 4rem 1rem;
            background-color: white;
        }

        .background-grid {
            display: grid;
            gap: 2rem;
            color: #374151;
        }

        @media (min-width: 768px) {
            .background-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        .text-block {
            margin-bottom: 1.5rem;
        }

        .text-link {
            color: #ff9c00;
            text-decoration: underline;
            transition: color 0.2s ease;
        }

        .text-link:hover {
            color: #92830c;
        }

        /* Future Section */
        .future-section {
            padding: 4rem 1rem;
            background: linear-gradient(135deg, #fefce8 0%, #fff7ed 100%);
        }

        .future-grid {
            display: grid;
            gap: 2rem;
            color: #374151;
            margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
            .future-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        .copim-image {
            max-width: 100%;
            height: auto;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            width: 60%;
        }

        .image-center {
            text-align: center;
        }
    </style>


    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <h1 class="hero-title font-roboto-slab text-primary">
                Opening the Future is a monograph subscription model that makes library funds go further through its collective membership scheme: achieving the dual objectives of enhancing collections while also supporting open access.
            </h1>
            
            <div class="hero-card">
                <p class="hero-description"><font color="#000000">
                    It's a simple library subscription membership programme whereby a press provides gated access to portions of their (closed) backlist books at a special price, and then uses the revenue from members' subscriptions to allow the frontlist to be OA from the date of publication.
                </font></p>
                
                <div class="grid-2">
                    <div>
                        <p class="text-block"><font color="#000000">
                            Members pay a small annual fee to get DRM-free, unlimited access to a closed selection of well-regarded publishers' backlists, with perpetual access after three years. The membership revenue is used only to produce new OA monographs, without forcing authors to find funding for book processing charges (BPCs). The programme was shortlisted for an ALPSP Innovation in Publishing Award soon after launching.
                        </font></p>
                    </div>
                    
                    <div>
                        <p class="text-block"><font color="#000000">
                            Building on library journal membership models such as Open Library of the Humanities and 'Subscribe to Open', this is a sustainable OA monograph publishing model that gives members access to a selection of the extensive backlist. The membership revenue is used to make newly-published books openly accessible to anyone.</font></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- How it Works Section -->
    <section class="how-it-works">
        <div class="container">
            <h2 class="section-title font-roboto-slab text-primary">
                How it works
            </h2>
            
            <div class="diagram-container">
                <img src="https://msup.openingthefuture.net/media/Opening_the_Future_in_a_nutshell_Feb_2024.png" alt="How Opening the Future works diagram" class="diagram-image">
            </div>
            
            <h3 class="publishers-title font-roboto-slab text-primary">
                Our publishers
            </h3>
            
            <!-- Press Cards -->
            <div class="press-grid">
                <!-- Liverpool University Press -->
                <div class="press-card">
                    <div class="logo-container">
                        <img src="/media/django-summernote/2025-06-25/a6e788d2-edb2-4354-9522-c253de5d55de.png" alt="Liverpool University Press Logo" class="logo-image">
                    </div>
                    <h3 class="press-title font-roboto-slab text-primary">Liverpool University Press</h3>
                    <a href="http://lup.openingthefuture.net/" class="visit-button">
                        <span>Visit Site</span>
                        <svg class="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>

                <!-- CEU Press -->
                <div class="press-card">
                    <div class="logo-container">
                        <img src="/media/django-summernote/2025-06-25/a85f78b1-ae98-4ee5-be85-a43362080a7c.png" alt="CEU Press Logo" class="logo-image">
                    </div>
                    <h3 class="press-title font-roboto-slab text-primary">CEU Press</h3>
                    <a href="http://ceup.openingthefuture.net/" class="visit-button">
                        <span>Visit Site</span>
                        <svg class="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>

                <!-- Michigan State University Press -->
                <div class="press-card">
                    <div class="logo-container">
                        <img src="/media/django-summernote/2025-06-25/a6a478f3-7471-4536-801d-c08feb5cba65.png" alt="Michigan State University Press Logo" class="logo-image">
                    </div>
                    <h3 class="press-title font-roboto-slab text-primary">Michigan State University Press</h3>
                    <a href="https://msup.openingthefuture.net/" class="visit-button">
                        <span>Visit Site</span>
                        <svg class="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>

 <!-- Boydell & Brewer -->
                <div class="press-card">
                    <div class="logo-container">
                        <img src="https://boydell.openingthefuture.net/media/django-summernote/2025-10-31/c06d8d4a-6566-426f-af67-2c66f392256d.png" alt="Boydell &amp; Brewer publisher logo" class="logo-image">
                    </div>
                    <h3 class="press-title font-roboto-slab text-primary">Boydell &amp; Brewer</h3>
                    <a href="https://boydell.openingthefuture.net/" class="visit-button">
                        <span>Visit Site</span>
                        <svg class="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>

 <!-- Fifth press -->
                <div class="press-card">
                    <div class="logo-container">
                        <img src="https://openingthefuture.net/media/django-summernote/2026-02-11/acecf727-bd53-4ce0-9039-11c30114d3b0.png" alt="BAB pressLogo" class="logo-image">
                    </div>
                    <h3 class="press-title font-roboto-slab text-primary">Basler Afrika Bibliographien</h3>
                    <a href="https://bab.openingthefuture.net/" class="visit-button">
                        <span>Visit Site</span>
                        <svg class="external-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </a>
                </div>


            </div>
        </div>
    </section>

    <!-- Background Section -->
    <section class="background-section">
        <div class="container">
            <h2 class="section-title font-roboto-slab text-primary">
                Background
            </h2>
            
            <div class="background-grid">
                <div>
                    <p class="text-block"><font color="#000000">
                        It has become increasingly clear, as open access has become more discussed, and even mandated, in monograph publishing, that current models based on BPCs are unsustainable and unequitable. Building on library journal subscription models and successful book membership programmes, <em>Opening the Future</em> funds new open access (OA) books that will be available to anyone. With small contributions from a large number of academic libraries, <strong>no single institution bears a disproportionate burden, and scholars and institutions around the world stand to benefit.</strong>
                    </font></p>
                    
                    <p class="text-block"><font color="#000000">
                        There are many academic libraries purchasing books, but by implementing a subscription model to purchase books, we broaden the pool to bring libraries who have not yet funded OA schemes into the fold. They come for the backlist and we hope that they will then stay for the OA.
                    </font></p>
                </div>
                
                <div>
                    <p class="text-block"><font color="#000000">
                        The model scales dynamically. Presses that have adopted it will continue to operate exactly as they are at the moment. However, the moment they have enough revenue to make a book OA through the scheme, the next book to be published can be made open access. In this way, presses don't need to wait until they have 200 libraries (for example) to start making things OA. Open access publishing can start once they have around 10 or 15 members (this number will vary depending on individual press publishing costs).
                    </font></p>
                    
                    <p class="text-block">
                        <font color="#000000"><em>Opening the Future</em> launched in early 2021 with the Central European University Press coming forward to pilot the model, and it expanded later that year with Liverpool University Press adopting a version of the model for two of their book series. Michigan State University Press launched a book series model in summer 2025 and Boydell &amp; Brewer launched several OtF packages in Autumn/Fall of 2025. Further publishers are considering their options with at least one more slated to launch in January 2026.</font><strong><font color="#000000">You can access the books and membership deals on offer from all participating presses by clicking on their logos on</font> <font color="#0000ff"><a href="https://openingthefuture.net/" class="text-link"><font color="#0000ff"><u>our home page</u></font></a> </font><font color="#000000">or by clicking the buttons above.</font></strong><font color="#000000">
                    </font></p>
                    
                    <p class="text-block"><font color="#000000">
                        We are always interested in talking to scholarly publishers who might like to launch an OtF programme themselves. If you would like to discuss this with the project team, please click</font> <a href="https://copim.pubpub.org/pub/y1nzugp1/release/1?readingCollection=09294f95" class="text-link"><font color="#0000ff"><u><b>here</b></u></font></a> <font color="#000000">for more details.
                    </font></p>
                </div>
            </div>
        </div>
    </section>

    <!-- The Future Section -->
    <section class="future-section">
        <div class="container">
            <h2 class="section-title font-roboto-slab text-primary">
                The future
            </h2>
            
            <div class="future-grid">
                <div>
                    <p class="text-block"><font color="#000000">
                        Copim is an international partnership of researchers, universities, librarians, publishers and infrastructure providers supported by the Research England Development Fund (REDFund) and by Arcadia, a charitable fund of Lisbet Rausing and Peter Baldwin. CEU Press were assisted by Copim in implementing Opening the Future. You can find out more about the Copim Community and its other open infrastructures at:</font> <a href="https://www.copim.ac.uk" class="text-link"><font color="#0000ff"><u>www.copim.ac.uk</u></font></a>
                    </p>
                </div>
                
                <div>
                    <p class="text-block"><font color="#000000">
                        If we wish to see a fair transition to open access for books, across the university sector, we need presses to implement these models themselves. No one model will fit all publishers or use cases but models like <em>Opening the Future</em> that scale dynamically as the revenue becomes available can set us on the right path.
                    </font></p>
                </div>
            </div>
            
            <div class="image-center">
                <img src="/media/django-summernote/2024-02-26/4986382f-2d28-4b41-bebc-ad12a1c4d02d.png" alt="Copim partnership logos" class="copim-image">
            </div>
        </div>
    </section>
