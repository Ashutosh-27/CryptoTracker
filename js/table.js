DJANGO_STATIC_URL = '{{ STATIC_URL }}';
let currCodearr = {
    'ALL': 'Albania Lek',
    'AFN': 'Afghanistan Afghani',
    'ARS': 'Argentina Peso',
    'AWG': 'Aruba Guilder',
    'AUD': 'Australia Dollar',
    'AZN': 'Azerbaijan New Manat',
    'BSD': 'Bahamas Dollar',
    'BBD': 'Barbados Dollar',
    'BDT': 'Bangladeshi taka',
    'BYR': 'Belarus Ruble',
    'BZD': 'Belize Dollar',
    'BMD': 'Bermuda Dollar',
    'BOB': 'Bolivia Boliviano',
    'BAM': 'Bosnia and Herzegovina Convertible Marka',
    'BWP': 'Botswana Pula',
    'BGN': 'Bulgaria Lev',
    'BRL': 'Brazil Real',
    'BND': 'Brunei Darussalam Dollar',
    'KHR': 'Cambodia Riel',
    'CAD': 'Canada Dollar',
    'KYD': 'Cayman Islands Dollar',
    'CLP': 'Chile Peso',
    'CNY': 'China Yuan Renminbi',
    'COP': 'Colombia Peso',
    'CRC': 'Costa Rica Colon',
    'HRK': 'Croatia Kuna',
    'CUP': 'Cuba Peso',
    'CZK': 'Czech Republic Koruna',
    'DKK': 'Denmark Krone',
    'DOP': 'Dominican Republic Peso',
    'XCD': 'East Caribbean Dollar',
    'EGP': 'Egypt Pound',
    'SVC': 'El Salvador Colon',
    'EEK': 'Estonia Kroon',
    'EUR': 'Euro Member Countries',
    'FKP': 'Falkland Islands (Malvinas) Pound',
    'FJD': 'Fiji Dollar',
    'GHC': 'Ghana Cedis',
    'GIP': 'Gibraltar Pound',
    'GTQ': 'Guatemala Quetzal',
    'GGP': 'Guernsey Pound',
    'GYD': 'Guyana Dollar',
    'HNL': 'Honduras Lempira',
    'HKD': 'Hong Kong Dollar',
    'HUF': 'Hungary Forint',
    'ISK': 'Iceland Krona',
    'INR': 'India Rupee',
    'IDR': 'Indonesia Rupiah',
    'IRR': 'Iran Rial',
    'IMP': 'Isle of Man Pound',
    'ILS': 'Israel Shekel',
    'JMD': 'Jamaica Dollar',
    'JPY': 'Japan Yen',
    'JEP': 'Jersey Pound',
    'KZT': 'Kazakhstan Tenge',
    'KPW': 'Korea (North) Won',
    'KRW': 'Korea (South) Won',
    'KGS': 'Kyrgyzstan Som',
    'LAK': 'Laos Kip',
    'LVL': 'Latvia Lat',
    'LBP': 'Lebanon Pound',
    'LRD': 'Liberia Dollar',
    'LTL': 'Lithuania Litas',
    'MKD': 'Macedonia Denar',
    'MYR': 'Malaysia Ringgit',
    'MUR': 'Mauritius Rupee',
    'MXN': 'Mexico Peso',
    'MNT': 'Mongolia Tughrik',
    'MZN': 'Mozambique Metical',
    'NAD': 'Namibia Dollar',
    'NPR': 'Nepal Rupee',
    'ANG': 'Netherlands Antilles Guilder',
    'NZD': 'New Zealand Dollar',
    'NIO': 'Nicaragua Cordoba',
    'NGN': 'Nigeria Naira',
    'NOK': 'Norway Krone',
    'OMR': 'Oman Rial',
    'PKR': 'Pakistan Rupee',
    'PAB': 'Panama Balboa',
    'PYG': 'Paraguay Guarani',
    'PEN': 'Peru Nuevo Sol',
    'PHP': 'Philippines Peso',
    'PLN': 'Poland Zloty',
    'QAR': 'Qatar Riyal',
    'RON': 'Romania New Leu',
    'RUB': 'Russia Ruble',
    'SHP': 'Saint Helena Pound',
    'SAR': 'Saudi Arabia Riyal',
    'RSD': 'Serbia Dinar',
    'SCR': 'Seychelles Rupee',
    'SGD': 'Singapore Dollar',
    'SBD': 'Solomon Islands Dollar',
    'SOS': 'Somalia Shilling',
    'ZAR': 'South Africa Rand',
    'LKR': 'Sri Lanka Rupee',
    'SEK': 'Sweden Krona',
    'CHF': 'Switzerland Franc',
    'SRD': 'Suriname Dollar',
    'SYP': 'Syria Pound',
    'TWD': 'Taiwan New Dollar',
    'THB': 'Thailand Baht',
    'TTD': 'Trinidad and Tobago Dollar',
    'TRY': 'Turkey Lira',
    'TRL': 'Turkey Lira',
    'TVD': 'Tuvalu Dollar',
    'UAH': 'Ukraine Hryvna',
    'GBP': 'United Kingdom Pound',
    'USD': 'United States Dollar',
    'UYU': 'Uruguay Peso',
    'UZS': 'Uzbekistan Som',
    'VEF': 'Venezuela Bolivar',
    'VND': 'Viet Nam Dong',
    'YER': 'Yemen Rial',
    'ZWD': 'Zimbabwe Dollar'
}



const COLORS = {
    open: '#9900ff',
    high: '#0062ff',
    low: '#373c43',
    close: '#ff8d0a',
}

const CASE_STATUS = {
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close',
}


let body = document.querySelector('body')

let coins_arr = []

let coins_list = []

let coins_chartData = []

let all_time_chart, pie_box1, pie_box2

let coin = 'bitcoin'
let period = '1'

// =============== Element Vars ==========
let compare = document.querySelector('#Compare')
let converter = document.querySelector('#Converter')
let news = document.querySelector('#News')
let popUp = document.querySelector('.popUp_container')
let modal_close = document.querySelector('.modal_close')
let modalBody = document.querySelector('.modal_container')
let loadingGif = document.querySelector('.loadingGif')
let modalContainer = document.querySelector('.modal_container')


let newsCoinimg1 = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlB0AckHBF8CGJKEJPH6hxUMc4dB3j7qTB9_6s5pB4DWd8otS-FqFxkCZeawdotSC1qxQ&usqp=CAU`

let newsCoinimg2 = 'https://i.pinimg.com/originals/de/09/67/de0967ad1eabab32f07359155b177f08.png'
let newsCoinimg3 = 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1414329426/al40wv8foxnih1ikem4q.png'





window.onload = async () => {

    // console.log('ready...')
    period = '1'


    await loadData(coin, period)


}


startLoading = () => {
    popUp.classList.toggle('active_modal')
    loadingGif.style.display = 'block'
    modal_close.style.display = 'none'
    modalContainer.style.display = 'none'



}

endLoading = () => {
    loadingGif.style.display = 'none'
    popUp.classList.toggle('active_modal')
    modal_close.style.display = 'inline-block'
    modalContainer.style.display = 'inline-block'

}



loadData = async (coin, period) => {
    startLoading()
    await loadCoinsData(period)

    loadCoinSelectListTab()
    document.querySelector('#coin-select-toggle_tab').addEventListener('click', () => {
        // console.log('buu')
        document.querySelector('#coin-select-list_tab').classList.toggle('active_tab')
    })

    endLoading()
}

loadAllcoinTable = (e) => {
    startLoading()
    let id = e.id
    Rank = e.market_cap_rank
    coin_Symbol = e.symbol.toUpperCase()
    coin_Thumb = e.image
    coin_Name = e.name
    coin_Price = e.current_price
    Market_Cap = e.market_cap
    circul_Supply = e.circulating_supply
    day1_Percent = e.price_change_percentage_24h
    high24 = e.high_24h
    low24 = e.low_24h


    let row = `
            <tr class='tabel_dataRow'>
                    <td class='rank'>${Rank}</td>
                    <td class='name_hold'><a href='analyzed/${id}/' class='link'><img src='${coin_Thumb}'class='img_tmb'> <span class='name_sym'><span>${coin_Name}</span><span>(${coin_Symbol})</span></span></a></td>
                    <td>${coin_Price}&nbsp;$</td>
                    <td class='day_percent'>${day1_Percent}%</td>
                    <td class='mrkt_cap'>${Market_Cap}&nbsp;$</td>
                    <td>${circul_Supply}&nbsp;(${coin_Symbol})</td>
                    <td class='view_chart'><a href='charts.html?id=${id}'><i class='bx bx-line-chart'></i></a></td>
            </tr>
        `
    tBody_data.innerHTML += row
    endLoading()
}

loadHorList = () => {
    let HorUL = document.querySelector('.hor_list')

    coins_list.forEach(e => {
        let hight24 = e.high_24h
        let low24 = e.low_24h
        let img = e.image
        let code = e.symbol.toUpperCase()

        let horLiItem = `
            <li class="hor_list_item">
            <div class='li_cont'>
                <div class='horsecA'><img src='${img}' class='img_tmb'><br><span class='hor_sym'>${code}</span></div>
                <div class='horsecB'>High : ${hight24}$<br>low : ${low24}$</div>
            </div>
            </li>`

        HorUL.innerHTML += horLiItem
    })
}


let tBody_data = document.querySelector('.tbody_data')
let coin_Name, coin_Thumb, coin_Symbol, day1_Percent, Market_Cap,
    circul_Supply, coin_Price, Rank, high24, low24


loadCoinsData = async (period) => {

    let coinsTypes = await manageApi.getCoinList()

    coinsTypes.forEach(e => {
        coins_list.push(e)
    })
    coinsTypes.forEach(e => {
        coins_arr.push(e.id)
    })


    coinsTypes.forEach((e) => {
        loadAllcoinTable(e)
    })
    // console.log(coins_chartData)


    let day_pertTag = document.querySelectorAll('.day_percent')
    day_pertTag.forEach(e => {
        let getCount = parseFloat(e.textContent)
        let checksign = Math.sign(getCount)
        // console.log(checksign)

        if (checksign == -1) {
            e.style.color = 'red'

        }
        else {
            e.style.color = 'green'
            e.innerHTML = "<i class='bx bx-up-arrow-alt' ></i>" + getCount
        }
    })

    loadHorList()
}



loadselctedCoinTable = (e) => {
    tBody_data.querySelectorAll('tr').forEach(e => e.remove())

    let id = e.id
    Rank = e.market_cap_rank
    coin_Symbol = e.symbol.toUpperCase()
    coin_Thumb = e.image
    coin_Name = e.name
    coin_Price = e.current_price
    Market_Cap = e.market_cap
    circul_Supply = e.circulating_supply
    day1_Percent = e.price_change_percentage_24h
    high24 = e.high_24h
    low24 = e.low_24h


    let row = `
    <tr class='tabel_dataRow'>
            <td class='rank'>${Rank}</td>
            <td class='name_hold'><a href='analyzed/${id}/' class='link'><img src='${coin_Thumb}'class='img_tmb'> <span class='name_sym'><span>${coin_Name}</span><span>(${coin_Symbol})</span></span></a></td>
            <td>${coin_Price}&nbsp;$</td>
            <td class='day_percent'>${day1_Percent}%</td>
            <td class='mrkt_cap'>${Market_Cap}&nbsp;$</td>
            <td>${circul_Supply}&nbsp;(${coin_Symbol})</td>
            <td class='view_chart'><a href='./charts.html?id=${id}'><i class='bx bx-line-chart'></i></a></td>
    </tr>
`
    tBody_data.innerHTML += row
    // console.log(row)

    let day_pertTag = document.querySelector('.day_percent')

    let getCount = parseFloat(day_pertTag.textContent)
    let checksign = Math.sign(getCount)
    // console.log(checksign)

    if (checksign == -1) {
        day_pertTag.style.color = 'red'

    }
    else {
        day_pertTag.style.color = 'green'
        day_pertTag.innerHTML = "<i class='bx bx-up-arrow-alt' ></i>" + getCount
    }

}

rendercoinSelectListTab = (list) => {
    let coin_select_list = document.querySelector('#coin-select-list_tab')
    coin_select_list.querySelectorAll('div').forEach(e => e.remove())


    list.forEach(e => {
        let item = document.createElement('div')
        item.classList.add('coin-item_tab')
        let up = e.id.slice(0, 1).toUpperCase()
        let rest = e.id.slice(1,)
        item.textContent = up + rest

        item.onclick = async () => {
            document.querySelector('#coin-select_tab span').textContent = up + rest
            coin_select_list.classList.toggle('active_tab')
            // console.log(e)
            loadselctedCoinTable(e)
        }

        coin_select_list.appendChild(item)
    })
}


loadCoinSelectListTab = () => {

    let coin_select_list = document.querySelector('#coin-select-list_tab')

    let item = document.createElement('div')
    item.classList.add('coin-item_tab')
    item.textContent = 'Coin'
    item.onclick = async () => {
        document.querySelector('#coin-select_tab span').textContent = 'Select Coin'
        coin_select_list.classList.toggle('active_tab')
    }
    coin_select_list.appendChild(item)
    initCoinFilterTab()
    rendercoinSelectListTab(coins_list)
}

// coin filter
initCoinFilterTab = () => {
    let input = document.querySelector('#coin-select-list_tab input')
    input.onkeyup = () => {
        let filtered = coins_list.filter(e => e.id.toLowerCase().includes(input.value))
        // console.log(filtered)
        rendercoinSelectListTab(filtered)
    }
}



ResetAllcoinTable = () => {
    tBody_data.querySelectorAll('tr').forEach(e => e.remove())
    coins_list.forEach(e => {

        loadAllcoinTable(e)


    })

    let day_pertTag = document.querySelectorAll('.day_percent')
    day_pertTag.forEach(e => {
        let getCount = parseFloat(e.textContent)
        let checksign = Math.sign(getCount)
        // console.log(checksign)

        if (checksign == -1) {
            e.style.color = 'red'

        }
        else {
            e.style.color = 'green'
            e.innerHTML = "<i class='bx bx-up-arrow-alt' ></i>" + getCount
        }
    })
}

let reset = document.querySelectorAll('#reset_tab')
reset.forEach(e => {
    e.addEventListener('click', () => {
        ResetAllcoinTable()
    })
})







getcompareBox = () => {
    let coinl
    let coinSelect1 = document.querySelector('#coin-select-toggle-1')
    let coinSelect2 = document.querySelector('#coin-select-toggle-2')
    let coin_select_list = document.querySelector('#coin-select-list')
    let clearGraph = document.querySelector('.compare_results')

    coinSelect1.addEventListener('click', () => {
        coinl = 1
        coin_select_list.style.display = 'block'
        clearGraph.innerHTML = ''
        loadCoinSelectList(coinl)
        initCoinFilter(coinl)

    })

    coinSelect2.addEventListener('click', () => {
        coinl = 2
        coin_select_list.style.display = 'block'
        clearGraph.innerHTML = ''
        loadCoinSelectList(coinl)//Ignore this warning of three dots
        initCoinFilter(coinl)

    })


    let Comparebtn = document.querySelector('.compare_btn')
    Comparebtn.addEventListener('click', () => {
        clearGraph.innerHTML = ''
        let coin1 = document.querySelector('#coin-select-toggle-1 span').textContent
        let coin2 = document.querySelector('#coin-select-toggle-2 span').textContent
        let option = document.querySelector('#type').value


        coinA = coin1.toLocaleLowerCase()
        coinB = coin2.toLocaleLowerCase()
        // console.log(coin1)

        let coin1data
        for (let i = 0; i < coins_list.length; i++) {
            if (coinA == coins_list[i].id) {
                coin1data = coins_list[i]
            }
        }
        // console.log(coin1data)


        let coin2data
        for (let i = 0; i < coins_list.length; i++) {
            if (coinB == coins_list[i].id) {
                coin2data = coins_list[i]
            }
        }
        // console.log(coin2data)

        let series = []
        if (option == 'price') {
            series.push(coin1data.current_price)
            series.push(coin2data.current_price)
        }
        else {
            series.push(coin1data.market_cap)
            series.push(coin2data.market_cap)
        }

        let coinsName = []
        coinsName.push(coin1data.name + ' ($)')
        coinsName.push(coin2data.name + ' ($)')
        // console.log(coinsName)

        loadCompareData(series, coinsName)
    })
}

loadCompareData = (series, coinsName) => {
    var options = {
        series: series,
        chart: {
            height: 250,
            type: 'donut',
        },
        colors: ['#9900ff', '#0084ff'],
        labels: coinsName,
        responsive: [{
            breakpoint: 280,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector(".compare_results"), options);
    chart.render();
}

getconvertBox = () => {
    let Select1 = document.querySelector('#currency_selectlist_1')
    let Select2 = document.querySelector('#currency_selectlist_2')


    for (let item in currCodearr) {
        let option_list1 = `<option value='${item}'>(${item})&nbsp;${currCodearr[item]}</option>`
        let option_list2 = `<option value='${item}'>(${item})&nbsp;${currCodearr[item]}</option>`

        Select1.innerHTML += option_list1
        Select2.innerHTML += option_list2
    }

    let convbtn = document.querySelector('.btn_conv')
    convbtn.addEventListener('click', () => {
        let amount = document.querySelector('.conv_input_1').value
        let conv_option1 = document.querySelector('#currency_selectlist_1').value
        let conv_option2 = document.querySelector('#currency_selectlist_2').value
        let result = document.querySelector('.conv_results')
        // console.log(conv_option1, conv_option2)

        loadCurrRates(conv_option1, conv_option2, amount, result)

    })

    loadCurrRates = (conv_option1, conv_option2, amount, result) => {
        let conv_main = fetch(`https://free.currconv.com/api/v7/convert?q=${conv_option1}_${conv_option2}&compact=ultra&apiKey=c8fb139c0cbdd1b9556c`).then(res => res.json()).then((data) => {
            var difference = Object.values(data)
            let diff = difference[0]
            let cov_amt = amount * diff
            result.textContent = cov_amt
        })
    }


}


//===============Ul ToolTip===========
let SideChevron = document.querySelector('.open_tool')
let ULToolTip = document.querySelector('.ul_tooltip')
SideChevron.addEventListener('click', () => {
    ULToolTip.classList.toggle('active_ultool')
})




compare.addEventListener('click', () => {
    popUp.classList.toggle('active_modal')
    modalBody.innerHTML =
        `
        <div class="compare_body">
                <div class="operation_box-comp">
                    <div class="coin-select" id="coin-select-1">
                        <div class="coin-select-toggle" id="coin-select-toggle-1" aria-valuetext="">
                            <span>
                                Coin 1
                            </span>
                            <i class="bx bx-chevron-down"></i>
                        </div>
                    </div>

                    <div class="coin-select" id="coin-select-2">
                        <div class="coin-select-toggle" id="coin-select-toggle-2" aria-valuetext="">
                            <span>
                                Coin 2
                            </span>
                            <i class="bx bx-chevron-down"></i>
                        </div>
                    </div>

                    <div class="coin-select-list" id="coin-select-list">
                        <input type="text" placeholder="Select coin element" id="coin_input">
                    </div>
                </div>
                <select name="type" id="type">
                        <option value="price">Price</option>
                        <option value="marketcapital">Market Capital</option>
                </select>

                <button class="compare_btn">Compare</button>
                <div class="compare_results"></div>
            </div>

    `


    getcompareBox()
})

converter.addEventListener('click', () => {
    popUp.classList.toggle('active_modal')
    modalBody.innerHTML =
        `<div class="converter_body">
                <div class="operation_box-conv">
                    <div class="firstCurrency">
                        <input type="text" class="conv_input_1" placeholder="amount">
                        <div class="currency_selectlist_container"><select name="" id="currency_selectlist_1">

                        </select></div>
                    </div>

                    <div>
                        <h4>TO</h4>
                    </div>
                    <div class="secondCurrency">

                        <div class="currency_selectlist_container"><select name="" id="currency_selectlist_2"></select></div>
                    </div>
                    <button class="btn_conv">Convert</button>
                    <div class="results_cont">
                        <div>Results&nbsp;:</div>&nbsp;
                        <div class="conv_results"></div>
                    </div>
                </div>
            </div>
    `

    getconvertBox()
})

news.addEventListener('click', () => {
    popUp.classList.toggle('active_modal')
    modalBody.innerHTML =
        `<div class="news_body" >
                <span class="read_title">Read news articles on</span>
                <div class="operation_box-news">

                    <div class="newsSite">
                        <a href="https://dailycoin.com/bitcoin-news/" target='_blank'><img src=${newsCoinimg1} alt="DC"
                                class="newslogo" style='width: 50px;height: auto;border-radius:0%;'></a>
                        <div class="Site_info">
                            <span class="news_site-Title">
                                <a href="https://dailycoin.com/bitcoin-news/" target='_blank'>
                                    <h3>DailyCoin</h3>
                                </a>
                            </span>
                            <div class="news_site-Info">
                                DailyCoin Covers crypto news, just as sentiments and instructive articles about Fintech,
                                advanced resources, and blockchain
                                innovation.
                            </div>
                        </div>
                    </div>

                    <div class="border"></div>

                    <div class="newsSite">
                        <a href="https://www.coindesk.com/" target='_blank'><img
                        src=${newsCoinimg2} alt="" class="newslogo" style='width: 50px;height: auto;border-radius:0%;'></a>
                        <div class="Site_info">
                            <span class="news_site-Title">
                                <a href="https://www.coindesk.com/" target='_blank'>
                                    <h3>CoinDesk</h3>
                                </a>
                            </span>
                            <div class="news_site-Info">
                                CoinDesk gives news and articles, just as recordings, instructive materials,bulletins,
                                and occasions inclusion.
                            </div>
                        </div>
                    </div>

                    <div class="border"></div>

                    <div class="newsSite">
                        <a href="https://www.newsbtc.com/" target='_blank'><img src=${newsCoinimg3} alt=""
                                class="newslogo" style='width: 50px;height: auto;border-radius:0%;'></a>
                        <div class="Site_info">
                            <span class="news_site-Title">
                                <a href="https://www.newsbtc.com/" target='_blank'>
                                    <h3>NewsBTC</h3>
                                </a>
                            </span>
                            <div class="news_site-Info">
                                NewsBTC gives Bitcoin news, specialized investigation, and market conjectures for
                                Bitcoin and altcoins.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    `

    getconvertBox()
})
modal_close.addEventListener('click', () => {
    popUp.classList.remove('active_modal')
})



// =============== Converter ==========
// 
// let converter_back = document.querySelector('.converter_back')
// let converter_close = document.querySelector('.converter_close')

// converter.addEventListener('click', () => {
//     converter_back.classList.toggle('active_conv')
// })
// converter_close.addEventListener('click', () => {
//     converter_back.classList.remove('active_conv')
// })


// =============== News ==========
// 
// let news_back = document.querySelector('.news_back')
// let news_close = document.querySelector('.news_close')

// news.addEventListener('click', () => {
//     news_back.classList.toggle('active_news')
// })
// news_close.addEventListener('click', () => {
//     news_back.classList.remove('active_news')
// })




// ================== Render CoinList ===========
rendercoinSelectList = (list, coinl) => {
    let coin_select_list = document.querySelector('.coin-select-list')
    coin_select_list.querySelectorAll('div').forEach(e => e.remove())

    let coinselect
    if (coinl == 1) {
        coinselect = document.querySelector('#coin-select-1 span')
    }
    else {
        coinselect = document.querySelector('#coin-select-2 span')
    }

    list.forEach(e => {
        let item = document.createElement('div')
        item.classList.add('coin-item')

        let up = e.slice(0, 1).toUpperCase()
        let rest = e.slice(1,)
        let collect = up + rest
        item.textContent = collect


        item.onclick = () => {
            coinselect.textContent = collect
            coin_select_list.classList.toggle('active_coList')
            coin_select_list.style.display = 'none'
            clearGraph.innerHTML = ''

        }

        coin_select_list.appendChild(item)
    })
}


loadCoinSelectList = (coinl) => {

    let coin_select_list = document.querySelector('.coin-select-list')
    // console.log(coin_select_list)


    let coinselect
    if (coinl == 1) {
        coinselect = document.querySelector('#coin-select-1')
    }
    else {
        coinselect = document.querySelector('#coin-select-2')
    }

    coinselect.addEventListener('click', () => { clearGraph.innerHTML = '' })


    let item = document.createElement('div')
    item.classList.add('coin-item')
    item.textContent = 'Coin'
    item.onclick = () => {
        coin_select_list.classList.toggle('active_coList')
    }
    // console.log(coins_list)
    coin_select_list.appendChild(item)

    rendercoinSelectList(coins_arr, coinl)
}

// coin filter
initCoinFilter = (coinl) => {
    let input = document.querySelector('#coin-select-list input')
    input.onkeyup = () => {
        let filtered = coins_arr.filter(e => e.toLowerCase().includes(input.value))
        rendercoinSelectList(filtered, coinl)
    }
}



/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


















