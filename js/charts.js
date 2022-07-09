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

let all_time_chart, chart2, pie_box1, pie_box2

// let coin = document.querySelector('.coin_val').textContent
var url_string = window.location.href; 
var url = new URL(url_string);
var coin = url.searchParams.get("id");




period = '1'
let secondFrom = '1392577232'
let secondTo = '1422577232'
let analysistype = 'prices'


startLoading =()=>{
    body.classList.add('loading')
}
endLoading =()=>{
    body.classList.remove('loading')
}


window.onload = async () => {
    // console.log('ready...')
    // console.log(coin)
    period = '1'
    initCoinFilter(period)
    await initAllTimesChart()
    await initSecondchart()
    await initPiechart1()
    await initPiechart2()
    await loadData(coin,period,secondFrom,secondTo,analysistype)
    await buttonCall(coin, period)


}

buttonCall = async (coin, period) => {
    let btns = document.querySelectorAll('.btn')
    btns.forEach(e => {
        e.onclick = async () => {
            period = e.value
            await loadSummary(coin, period)
            initCoinFilter(period)
        }
    })
}



loadData = async (coin, period) => {
    startLoading()
    await loadSummary(coin, period)
    await loadCoinBoxData(coin)
    // await loadSecondchart(coin,secondFrom,secondTo,analysistype)
    await loadCoinSelectList(period)
    document.querySelector('#coin-select-toggle').onclick = () => {
        document.querySelector('#coin-select-list').classList.toggle('active')
    }
    endLoading()
}





//============ Coin Box ==========
loadCoinBoxData = async (coin) => {

    let coinsTypes = await manageApi.getCoinList()
    let coin_symbol, coin_thumb, markCap, markCap_chg_Prday_percent, markCap_Rank, markCapCngPrdayPercent

    coinsTypes.forEach(e => {
        coins_list.push(e)
        // console.log(e.id+'\n')
    })

    coins_list.forEach(e => {
        if (e.id === coin) {
            coin_symbol = e.symbol
            coin_thumb = e.image
            markCap = e.market_cap
            markCap_chg_Prday_percent = e.market_cap_change_percentage_24h
            markCap_Rank = e.market_cap_rank
            Pie_box1(e)
            Pie_box2(e)
            // setOtherData(e)
        }
    })

    markCapCngPrdayPercentCut = `${markCap_chg_Prday_percent}`.slice(0, 6)

    let CoinHead = document.querySelectorAll('.coin_head')


    CoinHead.forEach(e => {

        // console.log(e)
        e.innerHTML = `<div class="coin_icon">
                        <img src="${coin_thumb}" alt="BU">
                        <span class="coin_code">${coin_symbol}</span>
                    </div>
                    `
    })

    await setvals(markCap, markCapCngPrdayPercentCut, markCap_Rank)
}
setvals = async (mCap, mCapChangePerDay, mCapR) => {
    let a = document.querySelector('.section_value-1')
    let b = document.querySelector('.section_value-2')
    let c = document.querySelector('.section_value-3')

    let parsed = parseFloat(mCapChangePerDay)

    let percent = Math.sign(parsed)
    if (percent === -1) {
        b.style.color = 'red'
        b.textContent = parsed + '%'

    }
    else {
        b.style.color = 'green'
        b.textContent = '+' + parsed + '%'

    }


    a.textContent = '$' + mCap

    c.textContent = '#' + mCapR

}




// ================ MAIN GRAPH ===================
initAllTimesChart = async () => {
    let options = {
        chart: {
            type: 'line'
        },
        colors: [COLORS.open, COLORS.high, COLORS.low, COLORS.close],
        series: [],
        xaxis: {
            categories: [],
            labels: {
                show: false
            }
        },
        grid: {
            show: true
        },
        stroke: {
            curve: 'smooth'
        }
    }

    all_time_chart = new ApexCharts(document.querySelector('.mainGraph'), options)

    all_time_chart.render()


}

renderCoinData = (summaryData, status) => {
    let res = []
    summaryData.forEach(e => {
        switch (status) {
            case CASE_STATUS.open:
                res.push(e[[1]])
                break
            case CASE_STATUS.high:
                res.push(e[[2]])
                break
            case CASE_STATUS.low:
                res.push(e[[3]])
                break
            case CASE_STATUS.close:
                res.push(e[[4]])
                break
        }
        // console.log(e[[1]])
    })
    return res
}

loadSummary = async (coin, period) => {
    let labels = []
    let open_data, high_data, low_data, close_data

    let Data = await manageApi.getSummary(coin, period)

    let summaryData = Data.slice(0, -1)
 
    summaryData.forEach(e => {
        let d = new Date(e[[0]])
        labels.push(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} | USD($)`)
    })

    open_data = renderCoinData(summaryData, CASE_STATUS.open)
    high_data = renderCoinData(summaryData, CASE_STATUS.high)
    low_data = renderCoinData(summaryData, CASE_STATUS.low)
    close_data = renderCoinData(summaryData, CASE_STATUS.close)


    //console.log(open_data,high_data,low_data,close_data)

    let series = [{
        name: 'Open',
        data: open_data
    }, {
        name: 'High',
        data: high_data
    }, {
        name: 'Low',
        data: low_data
    },
    {
        name: 'Close',
        data: close_data
    }]


    all_time_chart.updateOptions({
        series: series,
        xaxis: {
            categories: labels
        }
    })


}




// coin select
rendercoinSelectList = (list, period) => {
    let coin_select_list = document.querySelector('#coin-select-list')
    coin_select_list.querySelectorAll('div').forEach(e => e.remove())

    list.forEach(e => {
        let item = document.createElement('div')
        item.classList.add('coin-item')
        let up = e.slice(0, 1).toUpperCase()
        let rest = e.slice(1,)
        item.textContent = up + rest

        item.onclick = async () => {
            document.querySelector('#coin-select span').textContent = up + rest
            coin_select_list.classList.toggle('active')
            coin = e
            await loadData(e, period)
            await buttonCall(e, period)
            callSecondChart(coin)
        }

        coin_select_list.appendChild(item)
    })
}


loadCoinSelectList = async (period) => {
    let coinsTypes = await manageApi.getCoinList()


    coinsTypes.forEach(e => {
        coins_arr.push(e.id)
        // console.log(e.id+'\n')
    })
    // console.log(coins_list)


    let coin_select_list = document.querySelector('#coin-select-list')

    let item = document.createElement('div')
    item.classList.add('coin-item')
    item.textContent = 'Coin'
    item.onclick = async () => {
        document.querySelector('#coin-select span').textContent = 'Select Coin'
        coin_select_list.classList.toggle('active')
        await loadCoinBoxData(coin)
        await loadSummary(coin, period)
        await buttonCall(coin, period)
        callSecondChart(coin)
        

    }
    coin_select_list.appendChild(item)

    rendercoinSelectList(coins_arr, period)
}

// coin filter
initCoinFilter = (period) => {
    let input = document.querySelector('#coin-select-list input')
    input.onkeyup = () => {
        let filtered = coins_arr.filter(e => e.toLowerCase().includes(input.value))
        rendercoinSelectList(filtered,period)
    }
}






initSecondchart = async ()=>{
    
    var options = {
        series: [],
        chart: {
        height: 350,
        type: 'area',
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Price , Market Cap Analysis',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', '#ffff'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: [],
        labels: {
            show: false
        }
      }
      };

      chart2 = new ApexCharts(document.querySelector(".secondbox-body"), options);
      chart2.render();
}


renderSecondChartdata = (secondData) => {
    let res2 = []
    let raw
    secondData.forEach(e => {
        raw = String(e[[1]]).slice(0,7);
        res2.push(parseFloat(raw))
    })
    return res2
}


loadSecondchart = async(coin,priceFrom,priceTo,slug)=>{
    // console.log(coin,priceFrom,priceTo)
    let secondStats = await manageApi.getSecondchart(coin,priceFrom,priceTo)
    let Prices = secondStats.prices
    let Mark_Cap = secondStats.market_caps
    let secondData
    let labels2 = []
    let data_name = slug.slice(0,1).toUpperCase() + slug.slice(1,)
    // console.log(data_name)

    if(slug == 'prices'){
        secondData = Prices
    }
    else{
        secondData = Mark_Cap
    }

    secondData.forEach(e => {
        let d = new Date(e[[0]])
        labels2.push(`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} | USD($)`)
    })

    finaldata = renderSecondChartdata(secondData)

    let series2 = [{
        name: data_name,
        data: finaldata
    }]


    chart2.updateOptions({
        series: series2,
        xaxis: {
            categories: labels2
        }
    })

}




initPiechart1 = async () => {
    var options = {
        series: [],
        chart: {
            width: 350,
            type: 'donut'
        },
        labels: ['Current USD($)', 'High/24h USD($)', 'Low/24h USD($)'],
        fill: {
            colors: ['#069bff', '#9C27B0' ,'#0b49f5'],
        },
        stroke: {
            width: 1,
            colors: ['#069bff', '#9C27B0', '#0b49f5'],
        },
        yaxis: {
            show: true
        },
        legend: {
            position: 'bottom',
            fontSize: '15px',
            fontFamily: 'Helvetica, Arial',
            fontWeight: 400,
            labels: {
                colors: [COLORS.open, COLORS.high, COLORS.close],
                useSeriesColors: true
            },
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 5
                },
                spokes: {
                    strokeWidth: 5
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'dark',
                shadeIntensity: 0.7
            }
        }
    };

    pie_box1 = new ApexCharts(document.querySelector("#pie_box-1"), options);
    pie_box1.render();



}

Pie_box1 = (coin) => {
    let current = coin.current_price
    let highBy24 = coin.high_24h
    let lowBy24 = coin.low_24h

    let seriesdata = [current, highBy24, lowBy24]
    

    pie_box1.updateOptions({
        series: seriesdata
    })
}


initPiechart2 = async () => {
    var options = {
        series: [],
        chart: {
            width: 350,
            type: 'donut'
        },
        labels: ['CirculatingSupply', 'MaxSupply', 'TotalSupply'],
        fill: {
            colors: ['#069bff', '#9C27B0' ,'#0b49f5'],
        },
        stroke: {
            width: 1,
            colors: ['#069bff', '#9C27B0', '#0b49f5'],
        },
        yaxis: {
            show: true
        },
        legend: {
            position: 'bottom',
            fontSize: '15px',
            fontFamily: 'Helvetica, Arial',
            labels: {
                colors: ['#F44336', '#E91E63', '#9C27B0'],
                useSeriesColors: true
            },
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 4
                },
                spokes: {
                    strokeWidth: 4, 
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'dark',
                shadeIntensity: 0.7
            }
        }
    };

    pie_box2 = new ApexCharts(document.querySelector("#pie_box-2"), options);
    pie_box2.render();



}

Pie_box2 = (coin) => {
    let circulatingSupply = coin.circulating_supply
    let maxSupply = coin.max_supply
    let totalSupply = coin.total_supply

    

    let seriesdata = [circulatingSupply, maxSupply , totalSupply]
    let validated = []
    for(let i=0;i<seriesdata.length;i++){
        if (seriesdata[i] !== null){
            validated.push(seriesdata[i])
        }
        else{
            validated.push(0)
        }
    }


    seriesdata = validated
    pie_box2.updateOptions({
        series: seriesdata
    })
}




// ================= Price_chart===========
let pricebtn = document.querySelector('.price_btn')
let priceInput1 = document.querySelector('.date1')
let priceInput2 = document.querySelector('.date2')
let AnalysisType = document.querySelector('#AnalysisType')
pricebtn.addEventListener('click',()=>{
    let rawdate1 = String(new Date(priceInput1.value).getTime()).slice(0,10);
    let rawdate2 =  String(new Date(priceInput2.value).getTime()).slice(0,10);
    
    let date1 = parseInt(rawdate1)
    let date2 = parseInt(rawdate2)
    let slug = AnalysisType.value
    // console.log(slug)
    loadSecondchart(coin,date1,date2,slug)

})

callSecondChart=(coin)=>{
    let rawdate1 = String(new Date(priceInput1.value).getTime()).slice(0,10);
    let rawdate2 =  String(new Date(priceInput2.value).getTime()).slice(0,10);
    
    let date1 = parseInt(rawdate1)
    let date2 = parseInt(rawdate2)
    let slug = AnalysisType.value
    // console.log(slug)
    loadSecondchart(coin,date1,date2,slug)
}






/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
// const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'


// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    // themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}
