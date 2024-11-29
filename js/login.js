function showLoginForm() {
    document.getElementById('initialContent').style.display = 'none';
    document.getElementById('loginForm').style.display = 'flex';
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('mainMenu').style.display = 'flex';
    } else {
        alert("아이디와 비밀번호를 입력하세요.");
    }
}

function showSubMenu(menu) {
    document.getElementById('mainMenu').style.display = 'none';
    document.getElementById('subMenu').style.display = 'flex';

    const submenuTitle = document.getElementById('submenu-title');
    submenuTitle.innerText = menu + " 메뉴";

    const submenuOptions = document.getElementById('submenu-options');
    submenuOptions.innerHTML = ''; // 초기화

    const items = {
        "중식": ["짜장면", "짬뽕", "탕수육"],
        "한식": ["불고기", "비빔밥", "김치찌개"],
        "일식": ["초밥", "라멘", "덴푸라"]
    };

    items[menu].forEach(item => {
        const option = document.createElement('div');
        option.className = 'option';
        option.innerText = item;
        option.onclick = () => showLockerMenu(item);
        submenuOptions.appendChild(option);
    });
}

function showLockerMenu(selectedItem) {
    document.getElementById('subMenu').style.display = 'none';
    document.getElementById('lockerMenu').style.display = 'flex';

    const lockerOptions = document.getElementById('locker-options');
    lockerOptions.innerHTML = ''; // 초기화

    for (let i = 1; i <= 20; i++) {
        const locker = document.createElement('div');
        locker.className = 'option';
        locker.innerText = i;
        locker.onclick = () => showQRPasswordMenu(i, selectedItem);
        lockerOptions.appendChild(locker);
    }
}

function showQRPasswordMenu(lockerNumber, selectedItem) {
    document.getElementById('lockerMenu').style.display = 'none';
    document.getElementById('qrPasswordMenu').style.display = 'flex';
    console.log(`선택된 메뉴: ${selectedItem}, 사물함 번호: ${lockerNumber}`);
}

function showQR() {
    document.getElementById('qrPasswordMenu').style.display = 'none';
    document.getElementById('reservationComplete').style.display = 'flex';
    alert("QR 코드가 생성되었습니다!");
}

function showPasswordForm() {
    document.getElementById('qrPasswordMenu').style.display = 'none';
    document.getElementById('passwordMenu').style.display = 'flex';
}

function completeReservation() {
    const password = document.getElementById('setPassword').value;
    if (password.length === 4) {
        document.getElementById('passwordMenu').style.display = 'none';
        document.getElementById('reservationComplete').style.display = 'flex';
        alert(`비밀번호 설정 완료: ${password}`);
    } else {
        alert("4자리 비밀번호를 입력하세요.");
    }
}

function backToSubMenu() {
    document.getElementById('lockerMenu').style.display = 'none';
    document.getElementById('subMenu').style.display = 'flex';
}

function backToLockerMenu() {
    document.getElementById('qrPasswordMenu').style.display = 'none';
    document.getElementById('lockerMenu').style.display = 'flex';
}

function backToQRPasswordMenu() {
    document.getElementById('passwordMenu').style.display = 'none';
    document.getElementById('qrPasswordMenu').style.display = 'flex';
}

function backToMainMenu() {
    // 모든 화면 숨기기
    document.getElementById('subMenu').style.display = 'none';
    document.getElementById('lockerMenu').style.display = 'none';
    document.getElementById('qrPasswordMenu').style.display = 'none';
    document.getElementById('passwordMenu').style.display = 'none';
    document.getElementById('reservationComplete').style.display = 'none';
    document.getElementById('qrCodeSection').style.display = 'none'; // QR 코드 섹션 숨기기
    document.getElementById('loginForm').style.display = 'none';

    // 메인 메뉴 표시
    document.getElementById('initialContent').style.display = 'flex';
}


function showQR() {
    document.getElementById('qrPasswordMenu').style.display = 'none'; // 이전 화면 숨기기
    document.getElementById('qrCodeSection').style.display = 'flex'; // QR 코드 섹션 보이기
}

