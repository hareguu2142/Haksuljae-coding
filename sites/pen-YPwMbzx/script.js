// script.js

// --- 데이터베이스 시뮬레이션 ---
// 출처가 명확한 문장들만 포함 (총 55개)
const literaryQuotesData = [
    { text: "사람은 책을 만들고 책은 사람을 만든다.", source: "이이, 격몽요결" },
    { text: "가장 높은 곳에 오르려면, 가장 낮은 곳에서부터 시작하라.", source: "푸블릴리우스 시루스" },
    { text: "세상의 모든 것은 오직 마음먹기에 달려있다.", source: "원효" },
    { text: "꿈을 이루고 싶다면, 꿈을 꾸는 순간이 영원할 것처럼 느껴지게 해야 한다.", source: "알랭 드 보통" },
    { text: "고통이 멎으면 상실감도 멎는 줄 알았다. 그러나 그렇지 않았다.", source: "조지 오웰, 1984" },
    { text: "스스로 알을 깨고 나오면 병아리가 되지만, 남이 깨주면 후라이가 된다.", source: "최인호, 상도" },
    { text: "인생은 가까이서 보면 비극, 멀리서 보면 희극이다.", source: "찰리 채플린" },
    { text: "행복은 습관이다. 그것을 몸에 지녀라.", source: "엘버트 허버드" },
    { text: "젊은 날의 매일은 늙어가는 시간의 한 페이지다.", source: "공지영, 봉순이 언니" },
    { text: "사랑은 지배하는 것이 아니라 성장시키는 것이다.", source: "요한 볼프강 폰 괴테" },
    { text: "나는 생각한다, 고로 나는 존재한다.", source: "르네 데카르트" },
    { text: "우리가 잃은 건 시간이 아니라 우리 자신이었다.", source: "F. 스콧 피츠제럴드, 위대한 개츠비" },
    { text: "너 자신이 되어라. 다른 사람들의 자리는 이미 찼다.", source: "오스카 와일드" },
    { text: "흐르는 것은 강물뿐만이 아니다.", source: "박경리, 토지" },
    { text: "가장 훌륭한 예술은 언제나 삶의 한복판에 있다.", source: "헤르만 헤세" },
    { text: "내일을 위해 오늘을 참는 것은 인간이 가진 가장 위험한 착각이다.", source: "루이스 캐럴, 이상한 나라의 앨리스" },
    { text: "책을 읽고 나면 세상이 달라 보이는 것이 아니라, 내가 달라진다.", source: "막심 고리키" },
    { text: "인간은 자신이 경험한 것의 총합이다.", source: "밀란 쿤데라, 참을 수 없는 존재의 가벼움" },
    { text: "죽음은 삶을 이해하는 데 가장 필요한 거울이다.", source: "김영하, 살인자의 기억법" },
    { text: "모든 시도는 위험하다. 그러나 시도하지 않는다면 아무것도 얻을 수 없다.", source: "헬렌 켈러" },
    { text: "자유는 고독한 것이다.", source: "장 폴 사르트르" },
    { text: "가장 아름다운 것은 아직 오지 않았다.", source: "나짐 히크메트" },
    { text: "지혜는 듣는 데서 오고, 후회는 말하는 데서 온다.", source: "탈무드" },
    { text: "절망의 끝에서 희망이 시작된다.", source: "빅토르 위고, 레 미제라블" },
    { text: "산다는 것은 서서히 태어나는 것이다.", source: "생텍쥐페리, 어린 왕자" },
    { text: "강물은 결코 당신이 두 번 발을 담글 수 없게 한다.", source: "헤라클레이토스" },
    { text: "사랑할 때 버려야 할 것은 오직 자존심뿐이다.", source: "알랭 드 보통" },
    { text: "나는 운명을 믿지 않는다. 운명은 노력하는 사람에게 굴복한다.", source: "김수영, 시인" },
    { text: "밤이 깊을수록 별은 더욱 빛난다.", source: "파스칼" },
    { text: "모든 벽돌은 예술을 향한 벽돌이다.", source: "앙드레 지드" },
    { text: "가벼움은 지독한 무거움의 이면일 뿐이다.", source: "밀란 쿤데라" },
    { text: "인생은 꽃, 사랑은 그 꽃의 꿀이다.", source: "빅토르 위고" },
    { text: "오래된 것이 아름답다.", source: "올더스 헉슬리, 멋진 신세계" },
    { text: "진짜 여행은 새로운 풍경을 찾는 것이 아니라 새로운 눈을 갖는 것이다.", source: "마르셀 프루스트" },
    { text: "꿈을 계속 간직하고 있다면, 반드시 이룰 때가 온다.", source: "파울로 코엘료" },
    { text: "세상은 고통으로 가득하지만, 그것을 극복하는 사람들로도 가득하다.", source: "헬렌 켈러" },
    { text: "영혼의 목적은 삶에서 배우는 것이다.", source: "리처드 바크" },
    { text: "모든 책은 한 권의 세계다.", source: "호르헤 루이스 보르헤스" },
    { text: "비극적인 것은 사는 것을 멈추는 것이다.", source: "카프카" },
    { text: "슬픔은 가장 중요한 감정이다.", source: "무라카미 하루키" },
    { text: "희망이 없는 곳에는 아무것도 없다.", source: "톨스토이" },
    { text: "우리는 우리 자신을 고독 속에서 발견한다.", source: "장 폴 사르트르" },
    { text: "인생은 용감한 모험이거나, 혹은 아무것도 아니다.", source: "헬렌 켈러" },
    { text: "사랑은 우리가 이 세상에서 경험하는 유일한 현실이다.", source: "헤르만 헤세" },
    { text: "나만의 색깔을 잃지 마라.", source: "프리다 칼로" },
    { text: "세월이 가는 줄 모르고 살았습니다.", source: "황순원, 소나기" },
    { text: "진실이 가장 아름다운 언어다.", source: "에밀리 디킨슨" },
    { text: "모든 인간은 하나의 섬이다.", source: "존 던" },
    { text: "인생은 자전거를 타는 것과 같다. 균형을 잡으려면 계속 움직여야 한다.", source: "알베르트 아인슈타인" },
    { text: "가장 어두운 시간은 새벽 직전이다.", source: "파울로 코엘료" },
    { text: "타인을 이해하는 것은 영원히 불가능하다.", source: "무라카미 하루키" },
    { text: "인생은 우리가 계획하는 동안 벌어지는 것이다.", source: "존 레논" },
    { text: "예술은 가장 아름다운 거짓말이다.", source: "클로드 드뷔시" },
    { text: "모든 비밀을 아는 것은 고독의 시작이다.", source: "가브리엘 가르시아 마르케스" },
    { text: "세상은 한 권의 책이다. 여행하지 않는 자는 한 페이지만 읽는 것이다.", source: "성 아우구스티누스" }
];


let submittedQuotes = [
    { text: "시작이 반이다.", source: "아리스토텔레스", votes: 3 },
    { text: "고통 없이 얻는 것은 없다.", source: "벤저민 프랭클린", votes: 5 }
];

let usedQuoteIndices = [];
let maxQuotes = literaryQuotesData.length; // ★수정: const에서 let으로 변경 (투표 문장 추가 시 업데이트 가능하도록)
let currentVoteIndex = 0;
const RECOMMENDATION_THRESHOLD = 5; 

// --- DOM 요소 ---
const captureArea = document.getElementById('captureArea');
const dateInfo = document.getElementById('dateInfo');
const quoteText = document.getElementById('quoteText');
const quoteSource = document.getElementById('quoteSource');
const backgroundImage = document.getElementById('backgroundImage');
const userImageInput = document.getElementById('userImage');
const removeImageBtn = document.getElementById('removeImageBtn');
const fontSelect = document.getElementById('fontSelect'); 
const bgColorInput = document.getElementById('bgColor');
const fontColorInput = document.getElementById('fontColor');
const saveImageBtn = document.getElementById('saveImageBtn');
const nextQuoteBtn = document.getElementById('nextQuoteBtn');

// 투표 관련 요소는 재사용되므로, 여기서 `voteCount`는 사용하지 않습니다.
const voteText = document.getElementById('voteText');
const voteSource = document.getElementById('voteSource'); 
const recommendBtn = document.getElementById('recommendBtn');
const nextVoteBtn = document.getElementById('nextVoteBtn');

const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModalBtn = document.querySelector('.close-btn');
const submissionText = document.getElementById('submissionText');
const submitQuoteBtn = document.getElementById('submitQuoteBtn');


// --- 1. 날짜 표시 기능 ---
function displayDateInfo() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' };
    const dateString = today.toLocaleDateString('ko-KR', options);
    dateInfo.textContent = dateString;
}

// --- 2. 문장 표시 기능 (랜덤 순환) ---
function getTodaysQuote() {
    if (usedQuoteIndices.length === maxQuotes) {
        usedQuoteIndices = []; 
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * maxQuotes);
    } while (usedQuoteIndices.includes(randomIndex));

    usedQuoteIndices.push(randomIndex);
    
    const quote = literaryQuotesData[randomIndex];
    quoteText.textContent = `"${quote.text}"`;
    quoteSource.textContent = `— ${quote.source}`;
}

// --- 3. 배경/폰트 커스터마이징 기능 ---
userImageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            backgroundImage.src = event.target.result;
            backgroundImage.style.display = 'block';
            captureArea.style.backgroundColor = 'transparent'; 
            captureArea.classList.add('has-image');
        };
        reader.readAsDataURL(file);
    }
});

removeImageBtn.addEventListener('click', () => {
    backgroundImage.src = '';
    backgroundImage.style.display = 'none';
    captureArea.style.backgroundColor = bgColorInput.value; 
    captureArea.classList.remove('has-image');
    userImageInput.value = ''; 
});

fontSelect.addEventListener('change', (e) => {
    captureArea.style.fontFamily = e.target.value;
});

bgColorInput.addEventListener('input', (e) => {
    if (backgroundImage.style.display === 'none' || backgroundImage.src === '') {
        captureArea.style.backgroundColor = e.target.value;
    }
});

fontColorInput.addEventListener('input', (e) => {
    captureArea.style.color = e.target.value;
});

nextQuoteBtn.addEventListener('click', getTodaysQuote);


// --- 4. 이미지 저장 기능 ---
saveImageBtn.addEventListener('click', () => {
    html2canvas(captureArea, {
        useCORS: true, 
        allowTaint: true,
        backgroundColor: null 
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = '오늘의_감성_문장.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
});

// --- 5. 응모 문장 투표 기능 ---

function displayVoteQuote(index) {
    if (submittedQuotes.length === 0) {
        voteText.textContent = `"아직 응모된 문장이 없습니다."`;
        // ★FIX: span을 포함하여 구조를 재구성합니다.
        voteSource.innerHTML = "— (추천수: <span id='voteCount'>0</span>)"; 
        recommendBtn.disabled = true;
        nextVoteBtn.disabled = true;
        return;
    }
    
    currentVoteIndex = index % submittedQuotes.length;
    const quote = submittedQuotes[currentVoteIndex];
    
    voteText.textContent = `"${quote.text}"`;
    
    const sourceDisplay = quote.source.split(',')[0] || quote.source;
    
    // ★FIX: innerHTML을 사용하여 소스 텍스트와 추천수 span을 안전하게 업데이트합니다.
    voteSource.innerHTML = `— ${sourceDisplay} (추천수: <span id="voteCount">${quote.votes}</span>)`;
    
    recommendBtn.disabled = false;
    nextVoteBtn.disabled = false;
}

// 5-1. 추천하기 버튼 (로직 수정)
recommendBtn.addEventListener('click', () => {
    if (submittedQuotes.length === 0) return;

    submittedQuotes[currentVoteIndex].votes += 1;
    alert("추천되었습니다! 감사합니다.");
    
    if (submittedQuotes[currentVoteIndex].votes >= RECOMMENDATION_THRESHOLD) {
        const promotedQuote = submittedQuotes.splice(currentVoteIndex, 1)[0];
        literaryQuotesData.push({
            text: promotedQuote.text,
            source: promotedQuote.source
        });
        maxQuotes = literaryQuotesData.length; // 문장 개수 업데이트
        alert(`🎉 "${promotedQuote.text}" 문장이 오늘의 문장 후보에 올랐습니다!`);
    }
    
    // ★FIX: 투표 후 UI를 완전히 새로고침하여 추천수(voteCount)를 정확히 표시합니다.
    displayVoteQuote(currentVoteIndex);
});

// 5-2. 다른 응모 문장 보기 버튼
nextVoteBtn.addEventListener('click', () => {
    if (submittedQuotes.length > 0) {
        displayVoteQuote(currentVoteIndex + 1);
    }
});

// --- 6. 문장 응모 (모달) 기능 ---

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

submitQuoteBtn.addEventListener('click', () => {
    const text = submissionText.value.trim();
    if (text) {
        let quoteTextPart = text;
        let sourcePart = "응모자 제출";
        
        const lastHyphen = text.lastIndexOf('-');
        const lastComma = text.lastIndexOf(',');

        let splitIndex = -1;
        if (lastHyphen > lastComma && lastHyphen > text.length - 50) {
            splitIndex = lastHyphen;
        } else if (lastComma > lastHyphen && lastComma > text.length - 50) {
            splitIndex = lastComma;
        }
        
        if (splitIndex !== -1) { 
             quoteTextPart = text.substring(0, splitIndex).trim();
             sourcePart = text.substring(splitIndex + 1).trim();
        }

        submittedQuotes.push({
            text: quoteTextPart,
            source: sourcePart || "응모자 제출",
            votes: 0
        });
        
        alert("문장이 성공적으로 응모되었습니다! 추천을 기다려주세요.");
        submissionText.value = "";
        modal.style.display = 'none';
        displayVoteQuote(currentVoteIndex); 
    } else {
        alert("문장 내용을 입력해주세요.");
    }
});

// --- 초기 실행 ---

document.addEventListener('DOMContentLoaded', () => {
    displayDateInfo();
    getTodaysQuote(); 
    displayVoteQuote(0); 
    
    // 초기 로드 시 배경색 및 폰트 설정
    captureArea.style.backgroundColor = bgColorInput.value;
    captureArea.style.fontFamily = fontSelect.value;
});