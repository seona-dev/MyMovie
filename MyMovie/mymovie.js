/* 데이터 생성 */
let outArr = [];
let dirArr = [];
let yearArr = [];
let user = "구선아"
let bgpic_num = 0;

let movieArr = [{
    no: "",
    영화명:"그녀",
    감독:"스파이크 존즈",
    개봉년도:"2014",
    러닝타임:"125",
    주연:"호아킨 피닉스, 에이미 아담스, 스칼렛 요한슨",
    줄거리:`<b>사랑과 관계에 서툰 모두를 위한 감성 로맨스</b><br>
    다른 사람의 편지를 써주는 대필 작가로 일하고 있는 ‘테오도르’는<br>
    타인의 마음을 전해주는 일을 하고 있지만<br>
    정작 자신은 아내와 별거 중인 채 외롭고 공허한 삶을 살아가고 있다.<br>
    
    어느 날, 스스로 생각하고 느끼는 인공지능 운영체제 ‘사만다’를 만나게 되고,<br>
    자신의 말에 귀를 기울이며 이해해주는 ‘사만다’로 인해<br>
    조금씩 상처를 회복하고 행복을 되찾기 시작한 ‘테오도르’는<br>
    어느새 점점 그녀에게 사랑의 감정을 느끼게 되는데...`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}, {
    no: "",
    영화명:"기생충",
    감독:"봉준호",
    개봉년도:"2019",
    러닝타임:"131",
    주연:"송강호, 이선균, 조여정, 최우식, 박소담, 이정은",
    줄거리:`<b>“폐 끼치고 싶진 않았어요”</b><br><br>
    전원백수로 살 길 막막하지만 사이는 좋은 기택(송강호) 가족.<br>
    장남 기우(최우식)에게 명문대생 친구가 연결시켜 준 고액 과외 자리는<br>
    모처럼 싹튼 고정수입의 희망이다.<br>
    온 가족의 도움과 기대 속에 박사장(이선균) 집으로 향하는 기우.<br>
    글로벌 IT기업 CEO인 박사장의 저택에 도착하자<br>
    젊고 아름다운 사모님 연교(조여정)가 기우를 맞이한다.<br>
    <br>
    그러나 이렇게 시작된 두 가족의 만남 뒤로, 걷잡을 수 없는 사건이 기다리고 있었으니…`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}, {
    no: "",
    영화명:"마녀",
    감독:"박훈정",
    개봉년도:"2018",
    러닝타임:"125",
    주연:"김다미, 조민수, 박희순, 최우식",
    줄거리:`10년 전 의문의 사고가 일어난 시설에서 홀로 탈출한 후 모든 기억을 잃은 ‘자윤’. 나이도, 이름도 모르는 자신을 거두고 키워준 노부부의 보살핌으로 씩씩하고 밝은 여고생으로 자라났다.<br>
    <br>
    어려운 집안사정을 돕기 위해 상금이 걸린 오디션 프로그램에 출연한 자윤, 방송이 나간 직후부터 의문의 인물들이 그녀 앞에 나타난다.<br>
    자윤의 주변을 맴돌며 날카롭게 지켜보는 남자 ‘귀공자’,<br>
    그리고 과거 사고가 일어난 시점부터 사라진 아이를 찾던 ‘닥터 백’과 ‘미스터 최’까지 자신은 전혀 기억하지 못하는 그들의 등장으로,<br>
    자윤은 혼란에 휩싸이게 되는데...!<br>
    <br>
    그들이 나타난 후 모든 것이 바뀌었다`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}, {
    no: "",
    영화명:"더 페이버릿: 여왕의 여자",
    감독:"요르고스 란티모스",
    개봉년도:"2019",
    러닝타임:"119",
    주연:"올리비아 콜맨, 엠마 스톤, 레이첼 와이즈",
    줄거리:`<b>권력을 향한 그녀들의 미친 발버둥이 시작된다!<br>
    여왕의 마음을 차지하라!</b><br>
    <br>
    절대 권력을 지닌 히스테릭한 영국의 여왕 ‘앤’(올리비아 콜맨).<br>
    여왕의 오랜 친구이자 권력의 실세 ‘사라 제닝스’(레이첼 와이즈)와<br>
    신분 상승을 노리는 몰락한 귀족 가문 출신의 욕망 하녀<br>
    ‘애비게일 힐’(엠마 스톤)은 여왕의 총애를 받기 위해<br>
    수단과 방법을 가리지 않고 발버둥치기 시작하는데…`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}, {
    no: "",
    영화명:"블랙 위도우",
    감독:"케이트 쇼트랜드",
    개봉년도:"2021",
    러닝타임:"134",
    주연:"스칼렛 요한슨, 플로렌스 퓨",
    줄거리:`<b>"모든 것을 바꾼 그녀의 선택”<br>
    어벤져스의 운명을 바꾼 블랙 위도우, 그녀의 진짜 이야기가 시작된다!</b><br>
    <br>
    어벤져스의 히어로 블랙 위도우, ‘나타샤 로마노프’ (스칼렛 요한슨)는<br>
    자신의 과거와 연결된 레드룸의 거대한 음모와 실체를 깨닫게 된다.<br>
    <br>
    상대의 능력을 복제하는 빌런 ‘태스크마스터’와 새로운 위도우들의 위협에 맞서<br>
    목숨을 건 반격을 시작하는 ‘나타샤’는 스파이로 활약했던 자신의 과거 뿐 아니라,<br>
    어벤져스가 되기 전 함께했던 동료들을 마주해야만 하는데…<br>
    <br>
    <b>폭발하는 리얼 액션 카타르시스!<br>
    7월, MCU의 새로운 시대를 시작할 첫 액션 블록버스터를 만끽하라!</b>`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}, {
    no: "",
    영화명:"아이언맨3",
    감독:"셰인 블랙",
    개봉년도:"2013",
    러닝타임:"129",
    주연:"로버트 다우니 주니어, 기네스 팰트로",
    줄거리:`<b>21세기 가장 매력적인 히어로의 귀환<br>
    지금까지의 아이언맨은 잊어라!</b><br>
    <br>
    &lt;어벤져스&gt; 뉴욕 사건의 트라우마로 인해 영웅으로서의 삶에 회의를 느끼는 토니 스타크(로버트 다우니 주니어).<br>
    그가 혼란을 겪는 사이 최악의 테러리스트 만다린(벤 킹슬리)을 내세운 익스트리미스 집단 AIM이 스타크 저택에 공격을 퍼붓는다. 이 공격으로 그에게 남은 건 망가진 수트 한벌 뿐.<br>
    모든 것을 잃어버린 그는 다시 테러의 위험으로부터 세계와 사랑하는 여인(기네스 팰트로)를 지켜내야 하는 동시에 머릿속을 떠나지 않던 한가지 물음의 해답도 찾아야만 한다.<br>
    과연 그가 아이언맨인가? 수트가 아이언맨인가?`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}, {
    no: "",
    영화명:"타이타닉",
    감독:"제임스 카메론",
    개봉년도:"1998",
    러닝타임:"194",
    주연:"레오나르도 디카프리오, 케이트 윈슬렛",
    줄거리:`<b>“내 인생의 가장 큰 행운은 도박에서 딴 티켓으로 당신을 만난 거야”<br>
    단 하나의 운명, 단 한 번의 사랑,<br>
    영원으로 기억될 세기의 러브 스토리</b><br>
    <br>
    우연한 기회로 티켓을 구해 타이타닉호에 올라탄 자유로운 영혼을 가진 화가 잭(레오나르도 디카프리오)은<br>
    막강한 재력의 약혼자와 함께 1등실에 승선한 로즈(케이트 윈슬렛)에게 한 눈에 반한다.<br>
    진실한 사랑을 꿈꾸던 로즈 또한 생애 처음 황홀한 감정에 휩싸이고, 둘은 운명 같은 사랑에 빠지는데…`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}, {
    no: "",
    영화명:"나이브스 아웃",
    감독:"라이언 존슨",
    개봉년도:"2019",
    러닝타임:"130",
    주연:"다니엘 크레이그, 아나 디 아르마스",
    줄거리:`베스트셀러 미스터리 작가가 85세 생일에 숨진 채 발견된다.<br>
    그의 죽음의 원인을 파헤치기 위해 경찰과 함께 탐정 브누아 블랑이 파견 되는데…`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}, {
    no: "",
    영화명:"케빈에 대하여",
    감독:"린 램지",
    개봉년도:"2012",
    러닝타임:"112",
    주연:"틸다 스윈튼, 에즈라 밀러",
    줄거리:`<b>너의 엄마로 살아간다는 것</b><br>
    <br>
    자유로운 삶을 즐기던 여행가 에바에게 아들 케빈이 생기면서 그녀의 삶은 180도 달라진다. 일과 양육을 동시에 해내야 하는 에바의 삶은 케빈의 이유 모를 반항으로 점점 힘들어져만 간다. 에바는 가족 중 유독 자신에게만 마음을 열지 않는 케빈과 가까워지기 위해 애쓰지만 그럴수록 케빈은 더욱 교묘한 방법으로 에바에게 고통을 준다. 세월이 흘러 청소년이 된 케빈은 에바가 평생 혼자 짊어져야 할 끔찍한 일을 저지르는데…`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}, {
    no: "",
    영화명:"스포트라이트",
    감독:"토마스 맥카시",
    개봉년도:"2016",
    러닝타임:"128",
    주연:"마이클 키튼, 마크 러팔로, 레이첼 맥아담스",
    줄거리:`<b>세상을 바꾼 최강의 팀플레이!</b><br>
    <br>
    미국의 3대 일간지 중 하나인 보스턴 글로브 내 ‘스포트라이트’팀은<br>
    가톨릭 보스턴 교구 사제들의 아동 성추행 사건을 취재한다.<br>
    하지만 사건을 파헤치려 할수록 더욱 굳건히 닫히는 진실의 장벽.<br>
    결코 좌절할 수 없었던 끈질긴 ‘스포트라이트’팀은 추적을 멈추지 않고,<br>
    마침내 성스러운 이름 속에 감춰졌던 사제들의 얼굴이 드러나는데…<br>
    <br>
    <b>‘스포트라이트’팀이 추적한 충격적인 스캔들이 밝혀진다!</b>`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}, {
    no: "",
    영화명:"사바하",
    감독:"장재현",
    개봉년도:"2019",
    러닝타임:"122",
    주연:"이정재, 이재인, 박정민",
    줄거리:`<b>사람들은 말했다<br>
    그때, 그냥, 그것이 죽었어야 한다고…</b><br>
    <br>
    한 시골 마을에서 쌍둥이 자매가 태어난다.<br>
    온전치 못한 다리로 태어난 ‘금화’(이재인)와 모두가 오래 살지 못할 것이라고 했던 언니 ‘그것’.<br>
    하지만 그들은 올해로 16살이 되었다.<br>
    <br>
    신흥 종교 비리를 찾아내는 종교문제연구소 ‘박목사’(이정재)는<br>
    사슴동산이라는 새로운 종교 단체를 조사 중이다.<br>
    영월 터널에서 여중생이 사체로 발견되는 사건이 발생하고<br>
    이를 쫓던 경찰과 우연히 사슴동산에서 마주친 박목사는 이번 건이 심상치 않음을 직감한다.<br>
    <br>
    하지만 진실이 밝혀지기 전 터널 사건의 용의자는 자살하고,<br>
    그가 죽기 전 마지막으로 만난 실체를 알 수 없는 정비공 ‘나한’(박정민)과<br>
    16년 전 태어난 쌍둥이 동생 금화의 존재까지<br>
    사슴동산에 대해 파고들수록 박목사는 점점 더 많은 미스터리와 마주하게 되는데…!<br>
    <br>
    <b>그것이 태어나고 모든 사건이 시작되었다</b>`,
    감상평:"개인적인 감상평을 입력하는 공간입니다.<br>가장 감명깊게 본 구간이나, 영화가 특별히 좋았던 이유에 대해 자유롭게 이야기해보세요!"
}]

/* 넘버(순위) 정렬 - 페이지 로드시 늘 실행됨 */
function makeNumber() {
    for(let i=0;i<movieArr.length;i++) {
        movieArr[i].no = i+1;
        }
}
/* 감독 배열 생성 */
function makeDirArr() {
    dirArr = []
    for(let i=0;i<movieArr.length;i++) {
        if(!dirArr.includes(movieArr[i].감독)) dirArr.push(movieArr[i].감독)
    }
    dirArr.sort();
}
/* 연도 배열 생성 */
function makeYearArr() {
    yearArr = []
    for(let i=0;i<movieArr.length;i++) {
        if(!yearArr.includes(movieArr[i].개봉년도)) yearArr.push(movieArr[i].개봉년도)
    }
    yearArr.sort().reverse();
}
// function yearSort() {
//     yearArr.sort(function(a, b) {
//         return b.개봉년도 - a.개봉년도
//     })
// }
/* 1위~5위 랭크 생성 */
function rankSort() {
    outArr = [];
    for(let i=0;i<5;i++) {
        outArr.push(movieArr[i]);
    }
}
/* 노출용 배열 동일 년도 정렬 */
function getYearOut(year) {
    outArr = [];
    for(let i=0;i<movieArr.length;i++) {
        if(movieArr[i].개봉년도==year) outArr.push(movieArr[i])
    }
}
/* 노출용 배열 동일 감독 정렬 */
function getDirOut(director) {
    outArr = [];
    for(let i=0;i<movieArr.length;i++) {
        if(movieArr[i].감독==director) outArr.push(movieArr[i])
    }
}

/* 페이지 만들기 */
/* 홈 */
function showHome() {
    outString = `<div id="homepage"><div id="greeting"><h1 style="font-family:'Song Myung', serif">나의 인생영화.</h1>
    <p>${user}님의 인생영화를 만나보세요.<br>${user}님이 꼽은 인생영화를 순위별, 개봉년도별, 감독별로 확인해보실 수 있습니다.</p><div></div>`
    document.getElementById("container").style.width = "100%"
    document.getElementById("container").innerHTML = outString
}
/* 순위 보기 */
function showRank5() {
    rankSort();
    outString = `<div id="rankPage"><h1 id="rankPageName">${user}님의 인생 영화 순위🏆</h1><p>1위부터 5위까지의 순위를 확인해보세요.</p>`
    outString += `<div class="rankItem">`
    for(let i=0;i<outArr.length;i++) {
        outString += `<div class="rankPageContents"><p class="rankNumber">`
        if(i==0) outString += `🥇${i+1}위🥇</p>`
        else if(i==1) outString += `🥈${i+1}위🥈</p>`
        else if(i==2) outString += `🥉${i+1}위🥉</p>`
        else outString += `${i+1}위</p>`
        outString+= `<img class="rankImage" src="images/thumb_${outArr[i].no}.jpg" onclick="showMovie(${outArr[i].no})">`
        outString += `<p class="rankTitle" onclick="showMovie(${outArr[i].no})">${outArr[i].영화명}<small class="yearText"> (${outArr[i].개봉년도}년)</small></p></div>`
        if(i==2) outString += `</div><div class="rankItem">`
    }
    outString += `</div></div>`
    document.getElementById("container").innerHTML = outString
}
/* 연도별 보기 */
function showYears() {
    makeYearArr();
    outString = `<div id="years">`
    for(let i=0;i<yearArr.length;i++) {
        getYearOut(yearArr[i]);
        outString += `<div id="yearDistinct"><input type="checkbox" id="${yearArr[i]}"><label for="${yearArr[i]}" class="yearLineText">${yearArr[i]}년</label>`
        outString += `<div class="yearRow">`
        for(let j=0;j<outArr.length;j++) {
            outString += `<div class="yearItem"><img class="yearImage" src="images/thumb_${outArr[j].no}.jpg" onclick="showMovie(${outArr[j].no})"></div>`
            if((j+1)%3==0 && i!=outArr.length-1) outString += `</div><div class="yearRow">`
        }
        outString += `</div></div>`
    }
    outString += `</div>`
    document.getElementById("container").innerHTML = outString
}
/* 감독별 보기 */
function showDirectors() {
    makeDirArr()
    outString = `<div id="directors">`
    for(let i=0;i<dirArr.length;i++) {
        getDirOut(dirArr[i]);
        outString += `<div id="dirDistinct"><input type="checkbox" id="${dirArr[i]}"><label for="${dirArr[i]}" class="yearLineText">${dirArr[i]} 감독</label>`
        outString += `<div class="dirRow">`
        for(let j=0;j<outArr.length;j++) {
            outString += `<div class="dirItem"><img class="dirImage" src="images/thumb_${outArr[j].no}.jpg" onclick="showMovie(${outArr[j].no})"></div>`
            if((j+1)%3==0 && i!=outArr.length-1) outString += `</div><div class="dirRow">`
        }
        outString += `</div></div>`
    }
    outString += `</div>`
    document.getElementById("container").innerHTML = outString
}
/* 전체 추천 보기 */
function gallery() {
    outString = `<div id="gallery"><div class="galleryRow">`
    for(let i=0;i<movieArr.length;i++) {
        outString += `<div class="galleryItem"><img class="galleryImage" src="images/thumb_${movieArr[i].no}.jpg" onclick="showMovie(${movieArr[i].no})"></div>`
        if((i+1)%4==0 && i!=movieArr.length-1) outString += `</div><div class="galleryRow">`
    }
    outString += `</div></div>`
    document.getElementById("container").innerHTML = outString
}
/* 영화 상세 페이지 */
function showMovie(no) {
    bgpic_num = 0;
    let movie = ""
    for(let i=0;i<movieArr.length;i++) {
        if(no==movieArr[i].no) {
            movie = movieArr[i];
            break;
        }
    }
    
    // 상단 이미지, 텍스트 입력하기
    outString = `<div id="moviePage">
    <div id="movieImage">
    <button id="prevImage" onclick="changeImage(${movie.no},-1)"><</button>
    <div id="movieDetail"><h1 id="movieTitle">${movie.영화명}<small class="yearText"> (${movie.개봉년도}년)</small></h1>
    <p id="movieEtc">감독: ${movie.감독} / 러닝타임: ${movie.러닝타임}분 / 주연: ${movie.주연}</p></div>
    <button id="nextImage" onclick="changeImage(${movie.no},1)">></button>
    </div>`

    outString += `<div id="movieBottom">
    <div id="movieSummary"><p>줄거리</p><p>${movie.줄거리}</p></div>
    <div id="movieReview"><p>${user}님의 감상평</p><p>${movie.감상평}</p></div>
    </div>
    </div>`
    document.getElementById("container").innerHTML = outString
    document.getElementById("movieImage").style.background = `linear-gradient(to top, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 60%), url(images/big_${movie.no}_${bgpic_num}.jpg)`
    document.getElementById("movieImage").style.backgroundRepeat = "no-repeat"
    document.getElementById("movieImage").style.backgroundSize = "cover"
    document.getElementById("movieImage").style.backgroundPosition = "50% 30%"
}
function changeImage(no, num) {
    bgpic_num += num;
    if(bgpic_num==-1) {
        bgpic_num = 4;
        return;
    }
    else if(bgpic_num==5) {
        bgpic_num = 0;
    }
    document.getElementById("movieImage").style.background = `linear-gradient(to top, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 60%), url(images/big_${no}_${bgpic_num}.jpg)`
    document.getElementById("movieImage").style.backgroundRepeat = "no-repeat"
    document.getElementById("movieImage").style.backgroundSize = "cover"
    document.getElementById("movieImage").style.backgroundPosition = "50% 30%"
}
/* 임시(패치용) */
function temp() {
    outString = `<div id="fixing">`
    outString += `<p>🚧서비스 준비 중입니다🚧</p><p>순위 보기와 갤러리는 이용할 수 있어요!</p></div>`
    document.getElementById("container").innerHTML = outString
}

/* 실행 영역 */
makeNumber();