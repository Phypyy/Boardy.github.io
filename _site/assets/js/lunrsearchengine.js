
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/boardy/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/boardy/about",
    "title": "Memories of Boardgame's Rules!",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github. "
    }, {
    "id": 2,
    "url": "http://localhost:4000/boardy/authors",
    "title": "Authors",
    "body": "                                                                                                                  P:                        "
    }, {
    "id": 3,
    "url": "http://localhost:4000/boardy/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/boardy/contact",
    "title": "Contact",
    "body": "  Please send your message to Boardy. We will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/boardy/",
    "title": "Home",
    "body": "                                                                                               La Granja              :        ยูโรระดับกลาง กลไก Dice Drafting รับบทเป็นชาวไร่ขายของในตลาด แต่จากชาวไร่อาจจะกลายเป็นมาเฟียคุมตลาดแทนได้:                               12 Jan 2024        &lt;/span&gt;                                                                                                                   Coal Baron              :        ยูโรระดับเบา กลไก Worker Placement ที่ผู้เล่นรับบทเป็นเจ้าของเหมืองถ่านหินที่ต้องจัดการทรัพยากร พนักงาน และส่งมอบสินค้าตาม Order เพื่อทำแต้ม:                               12 Jan 2024        &lt;/span&gt;                        "
    }, {
    "id": 6,
    "url": "http://localhost:4000/boardy/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/boardy/la-granja/",
    "title": "La Granja",
    "body": "2024/01/12 -  ยูโรระดับกลาง กลไก Dice Drafting รับบทเป็นชาวไร่ขายของในตลาด แต่จากชาวไร่อาจจะกลายเป็นมาเฟียคุมตลาดแทนได้ Setup:  ผู้เล่นคนแรกนำ Maker มาไว้ตลาด แล้วคนถัดไปตามเข็มวางเลขถัดลงมา     2 คน: 3/2   3 คน: 4/3/2   4 คน: 5/4/3/2    วาง Craft marker เท่ากับจำนวนผู้เล่นในแต่ละ Craft buildings ทอยเต๋าเพื่อวาง Marker กากบาทปิด Craft buildings 3 อันแรก (สามารถปลดล็อกได้ในขั้นตอนการเล่น) วางแต้ม 1 แต้มที่ Craft buildings แต่ละแห่ง และที่ Marker กากบาทแต่ละที่ สุ่มไทล์หลังคาแต่ละเลขตามจำนวนผู้เล่นแล้ววางคว่ำไว้ ยกเว้นเลข 1 ให้หงาย แจกการ์ดให้คนละ 4 ใบ เงินคนละ 1 บาท แต้มคนละ 1 แต้ม ไทล์ม้าคนละชุด (ม้า 1 - 4) แต่ละคนนำ Marker 1 อันวางไว้ที่ช่องกล่องในบอร์ดผู้เล่น Playing: เราจะเล่นกันทั้งหมด 6 รอบ โดยดูรอบได้จากไทล์หลังคา เมื่อหลังคาเลข 6 ถูกเปิดจะถือว่าเป็นรอบสุดท้าย โดยแต่ละรอบจะประกอบด้วย Phase ย่อยอีก 4 Phase ดังนี้ 1. Farm Phase2. Revenue Phase3. Transportation Phase4. Scoring PhaseFarm Phase:  เล่นการ์ด 1 ใบ (ในรอบแรกจะให้เล่น 2 ใบ)     การ์ดจะสามารถใช้ได้ 4 แบบคือวาง บน ล่าง ซ้าย ขวา ซึ่งแต่ละแบบจะให้ความสามารถที่ต่างกันดังนี้         บน (Market barrow): จะเป็น Order ถ้าทำเสร็จจะได้ผลประโยชน์ตามที่ระบุ     ล่าง (Helper): ใช้ความสามารถการ์ด หากสัญลักษณ์ x1 คือใช้ได้ครั้งเดียวในแต่ละรอบ และบางใบจะมีบอกว่าใช้ได้ที่ Phase ไหน     ซ้าย (Field): เมื่อถึงช่วง Harvest ช่องที่ว่างให้นำ Maker มาวางไว้ แทนการผลิตวัตถุดับ (Olive, Grain, Grapes)     ขวา (Farm extension): เพิ่มการใช้ม้าได้ 1, ได้เงินเมื่อถึงช่วงรับ Income และถ้ามีหมู 2 ตัวจะได้หมูเพิ่ม 1 ตัวในช่วง Harvest          จากนั้นจั่วการ์ดตามจำนวนที่บอกด้านขวา (Farm extension) เริ่มต้นจะได้ 3 ใบ    Income     รับเงินตามจำนวนที่บอกด้านขวา (Farm extension) เริ่มต้นคือ 0 บาท    Harvest     นำ Maker มาวางไว้ที่ Field ที่ว่างอยู่    ซื้อหลังคา     ราคาเท่ากับจำนวนรอบ (เลขไทล์) ซื้อแล้วให้นำมาวางหงายไว้ที่หลังคาบอร์ดตัวเอง   Revenue Phase:  ทอยเต๋าตามจำนวนผู้เล่น +1 นำเต๋าไปวางไว้ให้ตรงกับ Revenue ในบอร์ดกลาง ผลัดกันหยิบเต๋าทีละลูกแล้วทำรับ Revenue ตามหน้าเต๋า 2 ครั้ง ลูกที่เหลืออีกลูกทุกคนจะได้ทำเหมือนกัน Transportation Phase:  เลือกไทล์ม้าแล้วคว่ำไว้ที่มุมบนซ้ายของบอร์ดตัวเอง จากนั้นหงายพร้อมกัน ผู้เล่นคนแรกจะขยับ Siesta track (0 - 3) จากนั้นเป็นคนอื่นตามลำดับ แล้วเรียงลำดับ Turn order ใหม่ โดยดูว่าใครอยู่บนสุด ส่งม้าทำงานตามจำนวนม้าที่เลือก (1 - 4) จ่ายเงิน 1 บาทต่อม้าที่อยู่ส่วน Farm extension ถ้าต้องการส่งของเพิ่ม ส่งของเข้า Market barrow     หากส่งของครบแล้วให้ดูผลประโยชน์ด้านล่าง ถ้าเป็นเลขให้นำไปวางที่ตลาดตามเลขที่ระบะ   หากเลขที่ตลาดเต็มสามารถเลือกดัน Maker อื่นออกไปแล้วเอาของตัวเองไปแทนได้   ได้รับแต้มตามเลข + จำนวนร้านค้าที่ถูกเตะออก (ร้านที่เลขน้อยกว่า)    ส่งของเข้า Craft buildings ถ้าส่งครบแล้วให้วาง Maker 1 และรับ Craft Maker แล้วทำความสามารถทันที จากนั้นผลิกมาวางไว้ที่บอร์ดตัวเองเป็นความสามารถติดตัว     Merchant House: รับ 3 บาททันที ได้รับ 3 บาทในช่วง Income   Wainwright: ได้ม้าเพิ่ม 1 และรับแต้ม Siesta ทันที ได้ม้าและ Siesta เพิ่ม 1 ทุกครั้ง   Deli: รับกล่อง 1 อันทันที กล่อง 1 อันในช่วง Income   Greengrocer: รับของอะไรก็ได้ 1 อย่าง (ผักและหมู) รับของอะไรก็ได้ช่วง Havest   Village Store: รับ 2 แต้มทันที 2 แต้มทุกครั้งที่ส่ง Craft buildings เสร็จ   Butcher: รับแต้มตามจำนวน Market barrow ทันที (0 - 3) ทุกครั้งที่ทำ Market barrow เสร็จได้รับอีก 1 แต้ม   Scoring Phase:  ร้านที่อยู่ในตลาดร้านละ 1 แต้ม แต้มที่แสดงใน Siesta track ย้าย Siesta track ทุกคนมาล่างสุด เปิดหลังคาเลขถัดไปEnd Game:  ขายของในคลังสินค้าให้หมด (ขายได้ทุกอย่างยกเว้นของใน Field) 5 บาท = 1 แต้ม ใครแต้มมากสุดชนะ"
    }, {
    "id": 8,
    "url": "http://localhost:4000/boardy/coal-baron/",
    "title": "Coal Baron",
    "body": "2024/01/12 -  ยูโรระดับเบา กลไก Worker Placement ที่ผู้เล่นรับบทเป็นเจ้าของเหมืองถ่านหินที่ต้องจัดการทรัพยากร พนักงาน และส่งมอบสินค้าตาม Order เพื่อทำแต้ม Setup:  วางไทล์ปิดช่อง Action ตามจำนวนผู้เล่นที่แสดงในกระดาน สับไทล์เหมือง แล้วจั่ววางในโซน Minecart factory เข็มนาฬิกาไว้ที่ I และแท่งนับแต้มไว้ที่ตำแหน่งแรกสุดของการนับแต้ม สับการ์ด Order แล้ววางไว้กลางกระดาน     2 คน: 7 ใบ   3 คน: 10 ใบ   4 คน: 13 ใบ    การ์ด Order ที่เหลือให้มาวางในโซน Order แล้วจั่วการ์ดวางให้เต็ม ผู้เล่นแต่ละคนวาง Victory Point marker วางไว้ที่แต้มบนกระดานหลัก เงิน     2 คน: 10 Marks   3 คน: 9 Marks   4 คน: 8 Marks    คนงาน     2 คน: 18 อัน   3 คน: 15 อัน   4 คน: 13 อัน    First player marker สำหรับผู้เล่นคนแรก Playing: เกมนี้จะเล่นทั้งหมด 3 รอบใหญ่ ในเกมจะเรียว่า  กะ (Shift)  ในแต่ละเทิร์น ผู้เล่นจะวางคนงานตั้งแต่ 1 หรืออาจมากกว่านั้น ลง 1 ช่อง Action โดยรอบใหญ่จะจบต่อเมื่อคนงานของผู้เล่นทุกคนถูกใช้จนหมด เมื่อจบแต่ละรอบจะมีการนับคะแนน จากนั้นผู้เล่นคนไหนที่วางคนงานในโซน Minecart factory มากที่สุดจะได้เป็น ผู้เล่นคนแรกในรอบถัดไป แล้วผู้เล่นทุกคนเก็บคนงานแล้วเริ่มเล่นรอบใหม่ Action: ในเกมจะมี Action ทั้งหมด 5 อย่าง ในเกมจะแบ่งเป็นโซน โดยเงื่อนไขการวางคือเริ่มต้นวางคนงาน 1 อัน หากเป็นช่องที่ไม่วางจะต้องใช้คนงานเท่ากับจำนวนเดิมที่อยู่ในช่องนั้น +1 แล้วนำคนงานชุดเดิมไปไว้ที่ โรงอาหาร (Canteen) Minecart factory  จ่ายเงินตามจำนวนและประเภทของแร่ ได้รับเหมืองไปวางไว้ที่บอร์ดตัวเอง โดยต้องวางให้ตรงประเภทแร่และดูว่ามีไฟหรือไม่มีไฟ (ซ้าย-ขวา) เมื่อเลือกเติมเหมืองให้เต็มทันที ช่องพิเศษจะจั่วการ์ดเหมืองมาดู 5 ใบ โดยจะซื้อ 1 หรือไม่ซื้อก็ได้ จากนั้นเลือกว่าจะเอาการ์ดที่ดูไว้บนกองหรือใต้กองMining  เลือกว่าจะใช้กี่ Action Point (AP)     เลื่อนลิฟท์ 1 ครั้ง (จะเลื่อนขึ้นลงกี่ชั้นก็ได้ แต่ถ้าหยุดคือจบ 1 ครั้ง) = 1 AP   ย้ายแร่ 1 ก้อน = 1 AP   เมื่อลิฟท์ถึงข้างบนสามารถใช้แร่สีอะไรก็ได้ 2 ก้อน แทนแร่สีอะไรก็ได้ 1 ก้อน เมื่อทำการย้ายแร่ (จากลิฟท์ไปโรงเก็บแร่ หรือจากลิฟท์ไป Order)   Delivery  เงื่อนไข: จะต้องลงให้ตรงประเภทกับ Order ที่เสร็จและตรงกับประเภทรถขนส่งแล้วอย่างน้อย 1 ใบ ลงที่รถประเภทไหนก็จะได้ส่งแต่ประเภทนั้นMoney  ลงช่องไหนได้เงินตามนั้น ช่องพิเศษจะไม่โดนเตะออก แต่จะได้เงินแค่ 1 MarksNew Order  เลือก Order แล้วนำมาวางที่บอร์ดตัวเอง เมื่อเลือกแล้วเติม Order ให้เต็มทันที ช่องพิเศษทำเหมือนกับ Minecart factoryEnd Round (Shift): นับคะแนนตามลำดับที่แสดงอยู่ส่วนเข็มนาฬิกา โดยรอบแรกจะนับแค่ 4 อย่าง รอบสองจะนับ 8 อย่าง และรอบสามนับ 12 อย่าง เมื่อนับแต่ละรอบเสร็จ ให้ดูว่าใครมีจำนวนคนงานในโซน Minecart factory มากสุดจะเป็นผู้เล่นคนแรกในรอบถัดไป เลื่อนเข็มไปกะที่สองและเลื่อน Scoring marker มาอันแรกใหม่อีกครั้ง End Game:  5 Marks = 1 แต้ม แร่ทุกๆ 3 ก้อน = 1 แต้ม Order ที่เหลืออยู่ = -1 แต้ม ผลรวมของฝั่งซ้ายและขวา ถ้าไม่เท่ากัน จำนวนที่เกินมาจำนวนละ = -2 แต้ม(ต่างกัน 2 อัน = -4 แต้ม)"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});