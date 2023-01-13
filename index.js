AOS.init()

anime({
    targets: '.about__imgBox',
    translateX: '-100%',
    loop: true,
    duration: 7000,
    easing: 'linear'
})
// -----------------------pg2-----------------------
const pg2__item = document.querySelectorAll('.pg2__item')
const pg2__h3 = document.querySelectorAll('.pg2__item > h3')
const pg2_data = [
    {
        img: 'images/pg2-5.png',
        text: '確保採用永續的消費和生產模式'
    },
    {
        img: 'images/pg2-6.png',
        text: '採取緊急行動應對氣候變遷及其影響'
    },
    {
        img: 'images/pg2-7.png',
        text: '保護永續利用海洋和海洋資源促進永續發展'
    },
    {
        img: 'images/pg2-8.png',
        text: '保護、恢復和促進陸域生態系統永續利用。維護森林防治荒漠化，制止並扭轉土地退化，以及遏制生物多樣性的喪失'
    },
]
pg2__item.forEach((item, index) => {
    item.onclick = () => {
        document.querySelector('.pg2Center__img').src = pg2_data[index].img
        document.querySelector('.pg2__h1').innerText = pg2__h3[index].innerText
        document.querySelector('.pg2__text').innerText = pg2_data[index].text
        document.querySelector('.pg2Center__box').classList.add('active')
        setTimeout(() => {
            document.querySelector('.pg2Center__box').classList.remove('active')
        }, 500);

    }
});

anime({
    targets: '.pg2Center__box',
    translateY: [8, -8],
    loop: true,
    duration: 700,
    direction: 'alternate',
    easing: 'easeInOutSine'
})


// -----------------------work-----------------------

const work_data = [
    {
        img: './images/work1.png',
        name: '良好健康和福祉',
        p: '確保健康的生活，<br>促進各年齡階段人口的福祉',
        target: 'workone',
        text: '確保健康的生活，<br>促進各年齡階段人口的福祉',
        h3: 'Good Health and Well-being'
    },
    {
        img: './images/work2.png',
        name: '性別平等',
        p: '實現性別平等，<br>增強所有婦女和女童的權能比例',
        target: 'worktwo',
        text: '實現性別平等，增強所有婦女和女童的權能比例',
        h3: 'Gender Equality'
    },
    {
        img: './images/work3.png',
        name: '減少不平等',
        p: '減少國家內部和國家之間的不平等',
        target: 'workthree',
        text: '減少國家內部和國家之間的不平等',
        h3: 'Reduced Inequalities'
    },
    {
        img: './images/work4.png',
        name: '永續城市與社區',
        p: '建設包容、安全、<br>有抵禦災害能力和<br>永續的城市和人類社區',
        target: 'workfour',
        text: '建設包容、安全、有抵禦災害能力和永續的城市和人類社區',
        h3: 'Sustainable Cities and Communities'
    },
    {
        img: './images/work5.png',
        name: '和平正義與有力的制度',
        p: '倡建和平、包容的社會<br>以促進永續發展',
        target: 'workfive',
        text: '倡建和平、包容的社會以促進永續發展，讓所有人都能訴諸司法，在各級建立有效、負責和包容的機構',
        h3: 'Peace, Justice and Strong Institutions'
    },
    {
        img: './images/work6.png',
        name: '夥伴關係 ',
        p: '強化執行手段，<br>重振全球永續發展夥伴關係',
        target: 'worksix',
        text: '強化執行手段，重振全球永續發展夥伴關係',
        h3: 'Partnerships for the Goals'
    },
]

work_data.forEach((data, index) => {
    document.querySelector('.work').innerHTML += `
    <div class="work__item">
        <img src="${data.img}" alt="" class="work__img">
        <h2 class="mt-3">${data.name}</h2>
        <p class="fs-4 text-center">${data.p}</p>
        <button class="btn bgtwo text-light" data-bs-toggle="modal" data-bs-target="#${data.target}">
            了解更多
        </button>
    </div>
    <div class="modal fade" id="${data.target}">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-dark">
                <div class="modal-header">
                    <h2>了解更多</h2>
                    <button class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="card card-body">
                        <img src="${data.img}" alt="" class="card-top-img">
                        <h2 class="card-title">${data.name}</h2>
                        <h3>${data.h3}</h3>
                        <p class="card-text">${data.text}</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn bgfirst text-light" data-bs-dismiss="modal">
                        關閉
                    </button>
                </div>
            </div>
        </div>
    </div>
    `
})

const work_item = document.querySelectorAll('.work__item')
const item_lenght = work_item.length
let count = 0
function getIndex(i) {
    if (i % item_lenght === 0) return 0

    if (Math.sign(i) == 1) {
        return i % item_lenght
    } else {
        return i % item_lenght + item_lenght
    }
}

function upclass(n) {
    count += n
    let index = getIndex(count)
    let nextIndex = Math.floor(item_lenght / 2)
    // reset
    work_item.forEach(item => {
        item.classList = 'work__item'
    })
    // center
    work_item[index].classList.add('active')
    // next
    let i = getIndex(index + 1)
    work_item[i].classList.add('next')
    // next2
    while (nextIndex > 1) {
        i = (i + 1) % item_lenght
        work_item[i].classList.add('next2')
        nextIndex -= 1
    }
    Math.sign[n] === 1 && remove_transition(i)
    // prve
    i = getIndex(index - 1)
    work_item[i].classList.add('prve')
    // prve2
    let lassindex = -1
    work_item.forEach((item, index) => {
        if (item.className == 'work__item') {
            lassindex = index
            item.classList.add('prve2')
        }
    })
    Math.sign[n] === 0 && remove_transition(lassindex)
}
function remove_transition(index) {
    work_item[index].classList.add('notransition')
    setTimeout(() => {
        work_item[index].classList.remove('notransition')
    },);
}
upclass(0)
window.addEventListener('click', e => {
    e.target.classList.contains('next') && upclass(1)
    e.target.classList.contains('prve') && upclass(-1)
})

// -----------------------footer-----------------------
const board = document.querySelector('.board')
const footer__name = document.querySelector('.footer__name')
const footer__gmail = document.querySelector('.footer__gmail')
const footer__message = document.querySelector('.footer__message')
const footer__input = document.querySelectorAll('.footer__input')

function Lsubmit() {
    if (footer__message.value == '') {
        return
    } else {

        board.innerHTML += `
        <div class="borad__box">
        <p>${footer__name.value}</p>
        <p>${footer__gmail.value}</p>
        </div>
        <p class="fs-4 borad__message ps-2">${footer__message.value}</p>
        `
        setTimeout(() => {
            footer__input.forEach(e => {
                e.value = ''
            })
        },);
    }
}

// -----------------------robot-----------------------
const robot__input = document.querySelector('.robot__input')
const robot__body = document.querySelector('.robot__body')
function inkey(e) {
    if (e.keyCode == 13) {
        send()
    }
}
function robot_btn(e) {
    if (e == 0) {
        robot__input.value = '環境保護'
    }
    if (e == 1) {
        robot__input.value = '活動參與'
    }
    if (e == 2) {
        robot__input.value = '社會進步'
    }

    send()
}

function send() {
    robot__body.innerHTML += `
    <div class="w-100">
        <p class="admin__message float-end">${robot__input.value}</p>
        
    </div>
    `

    var ans = "您好，很高興為您服務，我是本網站的機器人，有任何問題都可以向我詢問，或留下您的聯絡資訊，以方便客服人員做後續的解答"

    if (robot__input.value.includes("環境保護"))
        ans = "SDGs聯合國永續發展目標包括環境保護這一塊，期盼在未來人們能夠享受更好的環境"

    if (robot__input.value.includes("活動參與"))
        ans = "有許多關於SDGs聯合國永續發展目標的活動，等待著您來參與唷"

    if (robot__input.value.includes("社會進步"))
        ans = "SDGs聯合國永續發展目標包括社會進步這一塊，期盼在未來人們的社會步調能夠更加進步"

    if (robot__input.value.includes("環境保護"))
        ans = "SDGs聯合國永續發展目標包括環境保護這一塊，期盼在未來人們能夠享受更好的環境"

    if (robot__input.value.includes("環境保護"))
        ans = "SDGs聯合國永續發展目標包括環境保護這一塊，期盼在未來人們能夠享受更好的環境"

    setTimeout(() => {
        robot__body.innerHTML += `
            <div>
                <p class="robot__message w-100">${ans}</p>
            </div>
        `
    }, 350);

    robot__input.value = ''

}
const robot__container = document.querySelector('.robot__container')

function open_robot() {
    robot__container.classList.toggle('active')
}
function close_robot() {
    robot__container.classList.remove('active')
}

// -----------------------changecolor-----------------------
const color = {
    a: {
        '--colorfirst': '#5d9b84',
        '--colortwo': '#f59d55',
        '--bs-body-bg': '#fff',
        '--bs-body-color': 'rgb(33, 37, 41)',
    },
    b: {
        '--colorfirst': '#f59d55',
        '--colortwo': '#5d9b84',
        '--bs-body-bg': '#5d5d5d',
        '--bs-body-color': '#fff',
    }
}
let c = 1
function dark(e) {
    e.preventDefault()
    setcolor(color[Object.keys(color)[c++ % 2]])
    if (c++ % 2 == 1) {
        document.querySelector('.wave').style.backgroundImage = 'url(./images/wave1.png)'
        document.querySelector('.dark__icon').src = './images/dark.png'
        console.log(c++ % 2);
    } else {
        document.querySelector('.wave').style.backgroundImage = 'url(./images/wave2.png)'
        document.querySelector('.dark__icon').src = './images/light.png'
        console.log(c++ % 2);
    }
}
function setcolor(theme) {
    for (let key in theme) {
        document.documentElement.style.setProperty(key, theme[key])
    }
}