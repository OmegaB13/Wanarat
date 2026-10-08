document.addEventListener('DOMContentLoaded', () => {
    const chaptersData = [
        {
            chapter: "หมวดที่ ๑",
            title: "บททั่วไป",
            pageNum: "๑",
            topPageText: "หน้า ๑ / ๗",
            body: `
                <div style="text-align: center; margin-bottom: 25px;">
                    <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 6px;">บทที่ ๑</h2>
                    <h3 style="font-size: 16px; font-weight: 600; color: #333;">คำอธิบายกฎหมายแห่งเมือง วนารัตน์</h3>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๑ — ว่าด้วยเรื่องการทำตามกฎหมายแห่งเมือง</div>
                    <p class="indent"><strong>วรรค ๑</strong> กฎหมายแห่งเมือง วนารัตน์นี้ ให้ใช้บังคับแก่บุคคลทั้งหลายซึ่งอยู่ในภายในเขตแดนของเมือง ไม่ว่าผู้นั้นจะเป็นราษฎรแห่งเมืองหรือเป็นผู้เดินทางเข้ามาเป็นการชั่วคราว</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๒</div>
                    <p class="indent"><strong>วรรค ๑</strong> บุคคลทั้งหลายย่อมมีหน้าที่เคารพกฎหมาย คำสั่งของทางการ และคำสั่งอันชอบด้วยอำนาจของเจ้าหน้าที่แห่งเมือง</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๓</div>
                    <p class="indent"><strong>วรรค ๑</strong> การอ้างว่าไม่รู้กฎหมาย มิให้ถือเป็นเหตุให้พ้นจากความรับผิดตามกฎหมายนี้</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๔</div>
                    <p class="indent"><strong>วรรค ๑</strong> การปฏิบัติหน้าที่ของเจ้าหน้าที่ต้องกระทำโดยมีเหตุอันสมควร และอยู่ภายในขอบเขตแห่งอำนาจที่ได้รับ</p>
                </div>
            `
        },
        {
            chapter: "หมวดที่ ๒",
            title: "ว่าด้วยสิทธิและหน้าที่ของราษฎร",
            pageNum: "๒",
            topPageText: "หน้า ๒ / ๗",
            body: `
                <div class="article-section">
                    <div class="article-title">มาตรา ๕</div>
                    <p class="indent"><strong>วรรค ๑</strong> ราษฎรย่อมมีสิทธิในการดำรงชีวิต ประกอบอาชีพ ซื้อขายทรัพย์สิน และเดินทางภายในเมืองโดยสุจริต ทั้งนี้ต้องไม่ขัดต่อกฎหมาย</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๖</div>
                    <p class="indent"><strong>วรรค ๑</strong> ราษฎรมีหน้าที่ให้ความร่วมมือแก่เจ้าหน้าที่เมื่อมีเหตุอันเกี่ยวเนื่องกับความปลอดภัยของบ้านเมือง</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๗ — การให้ถ้อยคำอันเป็นเท็จ</div>
                    <p class="indent"><strong>วรรค ๑</strong> ผู้ใดให้ถ้อยคำอันเป็นเท็จต่อเจ้าหน้าที่โดยเจตนา เพื่อปกปิดความผิดหรือช่วยเหลือผู้กระทำผิด ผู้นั้นย่อมมีความผิด</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๓๐๐ บาท หรือจำคุก ๔ นาที</p>
                </div>
            `
        },
        {
            chapter: "หมวดที่ ๓",
            title: "ว่าด้วยความสงบเรียบร้อย",
            pageNum: "๓",
            topPageText: "หน้า ๓ / ๗",
            body: `
                <div class="article-section">
                    <div class="article-title">มาตรา ๘ — การสร้างความรบกวนผู้คนภายในเมืองต่าง ๆ ของเมือง</div>
                    <p class="indent"><strong>วรรค ๑</strong> ผู้ใดก่อเหตุทะเลาะวิวาท ส่งเสียงอื้ออึง ก่อความวุ่นวาย หรือใช้อำนาจข่มขู่บุคคลอื่นในที่สาธารณะ อันเป็นเหตุให้เกิดความเดือดร้อนแก่ประชาชนหรือสร้างความหม่นหมองแก่ผู้อื่นเป็นที่ประจักษ์ อิทธิเชน ถ่ายหนัก/เบา ไม่เป็นที่เป็นทาง,สร้างความเดือดร้อนอันเป็นเหตุรบกวนไม่ว่าจะเป็นการตะโกนเสียงดังเกินไปรบกวนผู้อื่น หรืออื่นๆ ผู้นั้นมีความผิด ทั้งนี้ต้องขึ้นอยู่กับดุลยพินิจของเจ้าหน้าที่ด้วย</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๑๐๐ บาท หรือจำคุก ๕ นาที</p>
                </div>
                <div style="text-align: center; font-weight: 700; margin: 20px 0 12px 0; font-size: 15px;">
                    ว่าด้วยเรื่องการใช้พาหนะในเขตเมือง
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๘.๑</div>
                    <p class="indent"><strong>วรรค ๑</strong> ห้ามใช้พาหนะในเขตชุมชนให้ลงก่อนเข้าบริเวณชุมชน
                    หากผู้ใดฝ่าฝืนผู้นั้นย่อมมีความผิด</p>
                    <p class="penalty">โทษ: ตักเตือนในครั้งแรก ปรับไม่เกิน ๓๐๐ บาท และริบการอนุญาตขับขี่พาหนะในเขตเมือง 3 ชั่วโมง</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๙ — การทำร้ายร่างกาย</div>
                    <p class="indent"><strong>วรรค ๑</strong> ผู้ใดทำร้ายร่างกายผู้อื่นโดยเจตนา ผู้นั้นมีความผิด</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๔๐๐ บาท และจำคุก ๑๐ นาที</p>
                    <p class="indent"><strong>วรรค ๒</strong> หากการกระทำนั้นเป็นเหตุให้ผู้ถูกทำร้ายได้รับบาดเจ็บร้ายแรง</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๑,๐๐๐ บาท และจำคุก ๓๐ นาที</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๑๐ — การฆ่าผู้อื่น CK</div>
                </div>
            `
        },
        {
            chapter: "หมวดที่ ๔",
            title: "ว่าด้วยอาวุธ",
            pageNum: "๔",
            topPageText: "หน้า ๔ / ๗",
            body: `
                <div class="article-section">
                    <div class="article-title">มาตรา ๑๑ — การพกพาอาวุธ</div>
                    <p class="indent"><strong>วรรค ๑</strong> บุคคลผู้ประสงค์จะพกพาหรือใช้อาวุธภายในเขตชุมชน ต้องปฏิบัติตามกฎหมายและข้อกำหนดของทางการ</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๑๒ — การข่มขู่ด้วยอาวุธ</div>
                    <p class="indent"><strong>วรรค ๑</strong> ผู้ใดชักอาวุธ ข่มขู่ หรือเล็งอาวุธใส่บุคคลอื่นโดยไม่มีเหตุอันสมควร ผู้นั้นมีความผิด</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๔๐๐ บาท และจำคุก ๑๐ นาที</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๑๓ — การยิงอาวุธโดยไม่มีเหตุ</div>
                    <p class="indent"><strong>วรรค ๑</strong> ผู้ใดยิงอาวุธภายในเขตชุมชนโดยไม่มีเหตุจำเป็นหรือไม่มีคำสั่งจากเจ้าหน้าที่ผู้นั้นมีความผิด</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๔๐๐ บาท และจำคุก ๑๐ นาที</p>
                    <p class="indent"><strong>วรรค ๒</strong> หากการยิงดังกล่าวมักทำให้ผู้อื่นได้รับบาดเจ็บหรือเสียชีวิต ให้พิจารณาโทษตามมาตราว่าด้วยการทำร้ายร่างกายหรือฆ่าผู้อื่น แล้วแต่กรณี</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๑๔ — การยึดอาวุธ</div>
                    <p class="indent"><strong>วรรค ๑</strong> เจ้าหนาที่มีอำนาจยึดอาวุธที่ใช้ในการกระทำความผิดไว้เป็นของกลาง และอาจสั่งเพิกถอนใบอนุญาตตามสมควรแก่กรณี</p>
                    <p class="indent" style="color: #666; font-style: italic;">(/me ยึดอาวุธผู้ต้องหา แล้วให้ผู้ต้องหาแจ้งหมายเลข license ของปืน แล้วเจ้าหน้าที่จดเอาไว้)</p>
                </div>
            `
        },
        {
            chapter: "หมวดที่ ๕",
            title: "ว่าด้วยเจ้าหน้าที่และอำนาจแห่งทางการ",
            pageNum: "๕",
            topPageText: "หน้า ๕ / ๗",
            body: `
                <div class="article-section">
                    <div class="article-title">มาตรา ๓๓</div>
                    <p class="indent"><strong>วรรค ๑</strong> เจ้าหน้าที่ผู้ได้รับแต่งตั้งโดยชอบ มีหน้าที่รักษาความสงบบังคับใช้กฎหมาย และคุ้มครองชีวิตและทรัพย์สินของราษฎร</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๓๔ — การใช้อำนาจโดยมิชอบ</div>
                    <p class="indent"><strong>วรรค ๑</strong> เจ้าหน้าที่ผู้ใช้อำนาจเกินขอบเขต หรือใช้อำนาจเพื่อประโยชน์ส่วนตน ย่อมมีความผิด</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๕๐๐ บาท หรือจำคุก ๑๐ นาที และอาจถูกเพิกถอนอำนาจหน้าที่</p>
                    <p class="indent"><strong>วรรค ๒</strong> หากเป็นการใช้อำนาจโดยมิชอบจนก่อให้เกิดความเสียหายร้ายแรง</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๑,๐๐๐ บาท และจำคุก ๓๐ นาที</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๓๕</div>
                    <p class="indent"><strong>วรรค ๑</strong> คำสั่งของเจ้าหน้าที่อันเกี่ยวกับความสงบเรียบร้อย ให้ราษฎรปฏิบัติตาม เว้นแต่คำสั่งนั้นขัดต่อกฎหมายแห่งเมือง</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๓๖</div>
                    <p class="indent"><strong>วรรค ๑</strong> เจ้าเมือง วนารัตน์ มีอำนาจออกประกาศ คำสั่ง หรือกฎเพิ่มเติม เพื่อรักษาความสงบและความเหมาะสมแก่สถานการณ์ของเมือง โดยประกาศดังกล่าวต้องไม่ขัดต่อกฎหมายแห่งเมือง</p>
                </div>
            `
        },
        {
            chapter: "หมวดที่ ๖",
            title: "ว่าด้วยทรัพย์สินและการลักทรัพย์",
            pageNum: "๖",
            topPageText: "หน้า ๖ / ๗",
            body: `
                <div class="article-section">
                    <div class="article-title">มาตรา ๑๖ — การลักทรัพย์</div>
                    <p class="indent"><strong>วรรค ๑</strong> ผู้ใดเอาทรัพย์ของผู้อื่นไปโดยทุจริต โดยเจ้าของมิได้ยินยอม ผู้นั้นมีความผิดฐานลักทรัพย์</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๔๐๐ บาท และจำคุก ๑๐ นาที และ คืนทรัพย์ที่ถูกขโมยแก่เหยื่อ</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๑๗ — การทำลายทรัพย์สิน</div>
                    <p class="indent"><strong>วรรค ๑</strong> ผู้ใดทำลาย ทำให้เสียหาย หรือทำให้ทรัพย์สินของผู้อื่นเสื่อมค่าโดยเจตนา ผู้นั้นมีความผิด</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๑๐๐ บาท หรือจำคุก ๕ นาที</p>
                    <p class="indent"><strong>วรรค ๒</strong> หากความเสียหายมีมูลค่าสูงหรือเป็นการกระทำโดยเจตนาร้ายแรง</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๔๐๐ บาท และจำคุก ๑๐ นาที</p>
                </div>
                <div class="article-section">
                    <div class="article-title">มาตรา ๑๘ — การรับหรือซ่อนทรัพย์สินอันได้มาโดยผิดกฎหมาย</div>
                    <p class="indent"><strong>วรรค ๑</strong> ผู้ใดรับ เก็บรักษา ซ่อนเร้น หรือช่วยปกปิดทรัพย์สินซึ่งตนรู้หรือควรรู้ว่าได้มาจากการกระทำความผิด ผู้นั้นมีความผิด</p>
                    <p class="penalty">โทษ: ปรับไม่เกิน ๔๐๐ บาท และจำคุก ๑๐ นาที</p>
                </div>
            `
        },
        {
            chapter: "อัตราโทษ",
            title: "อัตราโทษโดยสังเขป",
            pageNum: "๗",
            topPageText: "หน้า ๗ / ๗",
            body: `
                <!-- 1. หมวดระดับความผิด -->
                <div class="penalty-group">
                    <div class="penalty-item">
                        <div class="penalty-header">
                            <span class="dot dot-green"></span>
                            <strong>ความผิดเล็กน้อย</strong>
                        </div>
                        <p class="penalty-detail">ค่าปรับ ๕๐–๑๐๐ บาท หรือจำคุก ๕ นาที</p>
                        <p class="penalty-desc">ตัวอย่างเช่น การก่อความวุ่นวายเล็กน้อย การฝ่าฝืนข้อกำหนดทั่วไป หรือความผิดที่ก่อให้เกิดความเสียหายเพียงเล็กน้อย</p>
                    </div>

                    <div class="penalty-item">
                        <div class="penalty-header">
                            <span class="dot dot-yellow"></span>
                            <strong>ความผิดทั่วไป</strong>
                        </div>
                        <p class="penalty-detail">ค่าปรับ ๑๐๐–๕๐๐ บาท | จำคุก ๕–๑๐ นาที</p>
                    </div>

                    <div class="penalty-item">
                        <div class="penalty-header">
                            <span class="dot dot-orange"></span>
                            <strong>ความผิดร้ายแรง</strong>
                        </div>
                        <p class="penalty-detail">ค่าปรับ ๕๐๐–๑,๐๐๐ บาท | จำคุก ๑๐–๓๐ นาที</p>
                    </div>

                    <div class="penalty-item">
                        <div class="penalty-header">
                            <span class="dot dot-red"></span>
                            <strong>ความผิดร้ายแรงมาก</strong>
                        </div>
                        <p class="penalty-detail">ค่าปรับ ๑,๐๐๐–๓,๐๐๐ บาท | จำคุก ๓๐–๖๐ นาที</p>
                    </div>

                    <div class="penalty-item">
                        <div class="penalty-header">
                            <span class="dot dot-purple"></span>
                            <strong>ความผิดร้ายแรงเป็นพิเศษ</strong>
                        </div>
                        <p class="penalty-detail">ค่าปรับ ๓,๐๐๐–๕,๐๐๐ บาท | จำคุก เกิน ๖๐ นาที</p>
                        <p class="penalty-desc" style="color: var(--stamp-red); font-weight: 600;">และให้ส่งตัวไป ทัณฑสถานแห่งเมือง วนารัตน์</p>
                    </div>
                </div>

                <!-- 2. ระบบอายุความ -->
                <div class="section-divider"></div>
                <div class="statute-section">
                    <div class="article-title" style="font-size: 15px; margin-bottom: 8px;">
                        ระบบอายุความ (จัดเป็นระบบ ชั่วยาม ประเทศ / ชั่วยาม สยาม)
                    </div>
                    <div class="statute-list">
                        <p><span class="dot dot-yellow"></span> <strong>ความผิดทั่วไป :</strong> 2 ชั่วยาม ประเทศ</p>
                        <p><span class="dot dot-orange"></span> <strong>ความผิดร้ายแรง :</strong> 3 ชั่วยาม ประเทศ</p>
                        <p><span class="dot dot-red"></span> <strong>ความผิดร้ายแรงมาก :</strong> 3 ชั่วยาม สยาม</p>
                        <p><span class="dot dot-purple"></span> <strong>ความผิดร้ายแรงเป็นพิเศษ :</strong> 7 ชั่วยาม สยาม</p>
                    </div>
                    <p class="statute-note">
                        เมื่อหมดอายุความ เจ้าหน้าที่และชาวเมือง จักต้องหยุด ตามล่า จับกุมหรือแจ้งข้อหาย้อนหลังใดๆแก่ผู้ต้องคดี ทว่าสามารถใช้เรื่องราวดำเนินสตอรี่แนว กล่าวถึงได้ตามปกติ
                    </p>
                </div>

                <!-- 3. ตารางโทษแนะนำสำหรับเจ้าหน้าที่ -->
                <div class="section-divider"></div>
                <div class="table-box">
                    <div class="table-title">ตารางโทษแนะนำสำหรับเจ้าหน้าที่</div>
                    <table class="penalty-table">
                        <thead>
                            <tr>
                                <th>ระดับ</th>
                                <th>ค่าปรับ</th>
                                <th>จำคุก</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ความผิดเล็กน้อย</td>
                                <td>๕๐–๑๐๐ บาท</td>
                                <td>๕ นาที</td>
                            </tr>
                            <tr>
                                <td>ความผิดทั่วไป</td>
                                <td>๑๐๐–๕๐๐ บาท</td>
                                <td>๕–๑๐ นาที</td>
                            </tr>
                            <tr>
                                <td>ความผิดปานกลาง</td>
                                <td>๕๐๐–๑,๐๐๐ บาท</td>
                                <td>๑๐–๓๐ นาที</td>
                            </tr>
                            <tr>
                                <td>ความผิดร้ายแรง</td>
                                <td>๑,๐๐๐–๓,๐๐๐ บาท</td>
                                <td>๓๐–๖๐ นาที</td>
                            </tr>
                            <tr>
                                <td>ความผิดร้ายแรงเป็นพิเศษ</td>
                                <td>๓,๐๐๐–๕,๐๐๐ บาท</td>
                                <td>เกิน ๖๐ นาที + ทัณฑสถาน</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `
        }
    ];

    let currentIndex = 0;
    let isAnimating = false;

    const navList = document.getElementById('navList');
    const docChapter = document.getElementById('docChapter');
    const docTitle = document.getElementById('docTitle');
    const docBody = document.getElementById('docBody');
    const docPageNum = document.getElementById('docPageNum');
    const pageIndicator = document.getElementById('pageIndicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const paperContainer = document.querySelector('.paper-container');

    function buildSidebar() {
        navList.innerHTML = '';
        chaptersData.forEach((item, index) => {
            const li = document.createElement('li');
            li.className = `nav-item ${index === currentIndex ? 'active' : ''}`;
            li.innerHTML = `
                <span class="chapter">${item.chapter}</span>
                <span class="title">${item.title}</span>
            `;
            li.addEventListener('click', () => changePage(index));
            navList.appendChild(li);
        });
    }

    function updateContent(index) {
        currentIndex = index;
        const data = chaptersData[currentIndex];

        docChapter.innerText = data.chapter;
        docTitle.innerText = data.title;
        docBody.innerHTML = data.body;
        docBody.scrollTop = 0;
        docPageNum.innerText = `— ${data.pageNum} —`;
        pageIndicator.innerText = data.topPageText;

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === chaptersData.length - 1;

        buildSidebar();
    }

    function changePage(targetIndex) {
        if (isAnimating || targetIndex === currentIndex || targetIndex < 0 || targetIndex >= chaptersData.length) return;

        isAnimating = true;
        const isNext = targetIndex > currentIndex;
        const animClass = isNext ? 'page-turn-next' : 'page-turn-prev';

        paperContainer.classList.add(animClass);

        setTimeout(() => {
            updateContent(targetIndex);
        }, 250);

        setTimeout(() => {
            paperContainer.classList.remove(animClass);
            isAnimating = false;
        }, 500);
    }

    prevBtn.addEventListener('click', () => changePage(currentIndex - 1));
    nextBtn.addEventListener('click', () => changePage(currentIndex + 1));

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') changePage(currentIndex - 1);
        if (e.key === 'ArrowRight') changePage(currentIndex + 1);
    });

    updateContent(0);
});