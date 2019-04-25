import React,{Component} from 'react';
import {Line} from 'react-chartjs-2';
import * as d3 from 'd3';
import data from '../dataset/sachin.csv';
import dravid from '../dataset/dravid.csv'
import ganguly from '../dataset/ganguly.csv'
import sehwag from '../dataset/sehwag.csv'

class Chart extends Component{
    constructor(props) {
        super(props)
        this.state={};
    }

    componentDidMount() {
        let currentComponent = this;
        var hello;
        var hellogan;
        var hellosew;
        //dravid
        d3.csv(dravid).then(function(data) {
            //console.log('dravid sir data'+data)
            var colbatt1 = data.map(function(d) {
                return {

                    Runs: d.Runs
                }
            })
            console.log('dravid ka data')
            console.log(colbatt1)
            var testArraydr=Object.entries(colbatt1).slice(0,49).map(entry => entry[1].Runs);
            let resdr=testArraydr.filter(x=>!isNaN(x))
            var t1dr=0
            for(var at of resdr){
                t1dr +=parseInt(at);
            }
            t1dr=t1dr/testArraydr.length
            console.log('first avg of dravid sir'+t1dr)

            var testArraydr1=Object.entries(colbatt1).slice(50,99).map(entry => entry[1].Runs);
            let resdr1=testArraydr1.filter(x=>!isNaN(x))
            var t1dr1=0
            for(var at of resdr1){
                t1dr1 +=parseInt(at);
            }
            t1dr1=t1dr1/testArraydr.length
            console.log('first avg of dravid sir'+t1dr1)


            var testArraydr2=Object.entries(colbatt1).slice(100,149).map(entry => entry[1].Runs);
            let resdr2=testArraydr2.filter(x=>!isNaN(x))
            var t1dr2=0
            for(var at of resdr2){
                t1dr2 +=parseInt(at);
            }
            t1dr2=t1dr2/testArraydr.length
            console.log('first avg of dravid sir'+t1dr2)


            var testArraydr3=Object.entries(colbatt1).slice(150,199).map(entry => entry[1].Runs);
            let resdr3=testArraydr3.filter(x=>!isNaN(x))
            var t1dr3=0
            for(var at of resdr3){
                t1dr3 +=parseInt(at);
            }
            t1dr3=t1dr3/testArraydr.length
            console.log('first avg of dravid sir'+t1dr3)

            var testArraydr4=Object.entries(colbatt1).slice(200,249).map(entry => entry[1].Runs);
            let resdr4=testArraydr4.filter(x=>!isNaN(x))
            var t1dr4=0
            for(var at of resdr4){
                t1dr4 +=parseInt(at);
            }
            t1dr4=t1dr4/testArraydr.length
            console.log('first avg of dravid sir'+t1dr4)

            var testArraydr5=Object.entries(colbatt1).slice(249,295).map(entry => entry[1].Runs);
            let resdr5=testArraydr5.filter(x=>!isNaN(x))
            var t1dr5=0
            for(var at of resdr5){
                t1dr5 +=parseInt(at);
            }
            t1dr5=t1dr5/testArraydr.length
            console.log('first avg of dravid sir'+t1dr5)
            hello=[t1dr,t1dr1,t1dr2,t1dr3,t1dr4,t1dr5]
            console.log('Dravid ka data')

        });

        //gangully
        d3.csv(ganguly).then(function(data) {
            //console.log('dravid sir data'+data)
            var colbatt2 = data.map(function(d) {
                return {

                    Runs: d.Runs
                }
            })
            console.log('gangully ka data')
            console.log(colbatt2)
            var testArraygu=Object.entries(colbatt2).slice(0,49).map(entry => entry[1].Runs);
            let resgu=testArraygu.filter(x=>!isNaN(x))
            var t1gu=0
            for(var at of resgu){
                t1gu +=parseInt(at);
            }
            t1gu=t1gu/testArraygu.length
            console.log('first avg of ganguly sir'+t1gu)

            var testArraygu1=Object.entries(colbatt2).slice(50,99).map(entry => entry[1].Runs);
            let resgu1=testArraygu1.filter(x=>!isNaN(x))
            var t1gu1=0
            for(var at of resgu1){
                t1gu1 +=parseInt(at);
            }
            t1gu1=t1gu1/testArraygu1.length
            console.log('first avg of ganguly sir'+t1gu1)


            var testArraygu2=Object.entries(colbatt2).slice(100,149).map(entry => entry[1].Runs);
            let resgu2=testArraygu2.filter(x=>!isNaN(x))
            var t1gu2=0
            for(var at of resgu2){
                t1gu2 +=parseInt(at);
            }
            t1gu2=t1gu2/testArraygu2.length
            console.log('first avg of ganguly sir'+t1gu2)


            var testArraygu3=Object.entries(colbatt2).slice(150,169).map(entry => entry[1].Runs);
            let resgu3=testArraygu3.filter(x=>!isNaN(x))
            var t1gu3=0
            for(var at of resgu3){
                t1gu3 +=parseInt(at);
            }
            t1gu3=t1gu3/testArraygu3.length
            console.log('first avg of ganguly sir'+t1gu3)


            var testArraygu4=Object.entries(colbatt2).slice(170,189).map(entry => entry[1].Runs);
            let resgu4=testArraygu4.filter(x=>!isNaN(x))
            var t1gu4=0
            for(var at of resgu4){
                t1gu4 +=parseInt(at);
            }
            t1gu4=t1gu4/testArraygu4.length
            console.log('first avg of ganguly sir'+t1gu4)

            var testArraygu5=Object.entries(colbatt2).slice(190,201).map(entry => entry[1].Runs);
            let resgu5=testArraygu5.filter(x=>!isNaN(x))
            var t1gu5=0
            for(var at of resgu5){
                t1gu5 +=parseInt(at);
            }
            t1gu5=t1gu5/testArraygu5.length
            console.log('first avg of ganguly sir'+t1gu5)

            hellogan=[t1gu,t1gu1,t1gu2,t1gu3,t1gu4,t1gu5]
            console.log('gangully ka data')

        });

        //Sehwag
        d3.csv(sehwag).then(function(data) {
            //console.log('dravid sir data'+data)
            var colbatt3 = data.map(function(d) {
                return {

                    Runs: d.Runs
                }
            })
            console.log('sehwag ka data')
            console.log(colbatt3)
            var testArrayse=Object.entries(colbatt3).slice(0,29).map(entry => entry[1].Runs);
            let resse=testArrayse.filter(x=>!isNaN(x))
            var t1se=0
            for(var at of resse){
                t1se +=parseInt(at);
            }
            t1se=t1se/testArrayse.length
            console.log('first avg of sehwag sir'+t1se)

            var testArrayse1=Object.entries(colbatt3).slice(30,59).map(entry => entry[1].Runs);
            let resse1=testArrayse1.filter(x=>!isNaN(x))
            var t1se1=0
            for(var at of resse1){
                t1se1 +=parseInt(at);
            }
            t1se1=t1se1/testArrayse1.length
            console.log('first avg of sehwag sir'+t1se1)


            var testArrayse2=Object.entries(colbatt3).slice(60,99).map(entry => entry[1].Runs);
            let resse2=testArrayse2.filter(x=>!isNaN(x))
            var t1se2=0
            for(var at of resse2){
                t1se2 +=parseInt(at);
            }
            t1se2=t1se2/testArrayse2.length
            console.log('first avg of sehwag sir'+t1se2)


            var testArrayse3=Object.entries(colbatt3).slice(100,129).map(entry => entry[1].Runs);
            let resse3=testArrayse3.filter(x=>!isNaN(x))
            var t1se3=0
            for(var at of resse3){
                t1se3 +=parseInt(at);
            }
            t1se3=t1se3/testArrayse3.length
            console.log('first avg of sehwag sir'+t1se3)


            var testArrayse4=Object.entries(colbatt3).slice(130,159).map(entry => entry[1].Runs);
            let resse4=testArrayse4.filter(x=>!isNaN(x))
            var t1se4=0
            for(var at of resse4){
                t1se4 +=parseInt(at);
            }
            t1se4=t1se4/testArrayse4.length
            console.log('first avg of sehwag sir'+t1se4)

            var testArrayse5=Object.entries(colbatt3).slice(160,177).map(entry => entry[1].Runs);
            let resse5=testArrayse5.filter(x=>!isNaN(x))
            var t1se5=0
            for(var at of resse5){
                t1se5 +=parseInt(at);
            }
            t1se5=t1se5/testArrayse5.length
            console.log('first avg of sehwag sir'+t1se5)

            hellosew=[t1se,t1se1,t1se2,t1se3,t1se4,t1se5]
            console.log(hellosew)
            console.log('sehwag ka data')
        });



















        //sachin
        d3.csv(data).then(function(data) {

            var colbatt = data.map(function(d) {
                return {

                    col0: d.batting_score[0]
                }
            });


         var testArray=Object.entries(colbatt).slice(0,99).map(entry => entry[1].col0);
            let res=testArray.filter(x=>!isNaN(x))
            var t1=0
            for(var at of res){
                 t1 +=parseInt(at);
            }
            t1=t1/testArray.length
            console.log(t1)

            var testArray3=Object.entries(colbatt).slice(150,249).map(entry => entry[1].col0);
            let res5=testArray3.filter(x=>!isNaN(x))
            var t5=0
            for(var at of res5){
                t5 +=parseInt(at);
            }
            t5=t5/testArray3.length
            console.log(t5)



            var testArray2=Object.entries(colbatt).slice(100,149).map(entry => entry[1].col0);
            let res2=testArray2.filter(x=>!isNaN(x))
            var t2=0
            for(var at of res2){
                t2 +=parseInt(at);
            }
            t2=t2/testArray2.length
            console.log(t2)

            var testArray5=Object.entries(colbatt).slice(401,463).map(entry => entry[1].col0);
            let res6=testArray5.filter(x=>!isNaN(x))
            var t6=0
            for(var at of res6){
                t6 +=parseInt(at);
            }
            t6=t6/testArray5.length
            console.log(t6)


            var testArray7=Object.entries(colbatt).slice(250,300).map(entry => entry[1].col0);
            let res7=testArray7.filter(x=>!isNaN(x))
            var t7=0
            for(var at of res7){
                t7 +=parseInt(at);
            }
            t7=t7/testArray7.length
              console.log(t7)

            var testArray6=Object.entries(colbatt).slice(301,400).map(entry => entry[1].col0);

            let res4=testArray6.filter(x=>!isNaN(x))
            var t4=0
            for(var at of res4){
                t4 +=parseInt(at);
            }
            t4=t4/testArray6.length
            console.log(t4)


            var localHello=[];
            for(var it of hello){
                localHello.push(it)
            }
            console.log(localHello)

            var localHelloGan=[];
            for(var it of hellogan){
                localHelloGan.push(it)
            }
            console.log(localHelloGan)

            var localHelloSew=[];
            for(var it of hellosew){
                localHelloSew.push(it)
            }
            console.log('hello from above'+localHelloSew)
            currentComponent.setState({
                data: {
                    labels: ['1989-1995', '1995-1997', '1997-2000', '2000-2002', '2003-2007', '2007-2012'],
                    backgroundColor: '#23BFAA',
                    datasets: [
                        {
                            label: "Sachin",
                            fill: false,
                            borderColor: "rgba(32, 162, 219)", // <-- supposed to be light blue
                            data: [t1 * 10, t2 * 10, t5 * 10, t7 * 10, t4 * 10, t6 * 10],
                        },
                        {
                            label: "Dravid",
                            fill: false,
                            borderColor: "rgba(196, 93, 105)",
                            data: localHello,
                        },
                        {
                            label: "Gangully",
                            fill: false,
                            borderColor: "rgba(0,0,255)",
                            data: localHelloGan,
                        },
                        {
                            label: "Sehwag",
                            fill: false,
                            borderColor: "rgba(255,127,80)",
                            data: localHelloSew,
                        }


                    ]


                }

                }
                )
        }).catch(function(err) {
            console.log(err)
        })


    }




    render() {
        const {data}=this.state;

        return (
            <div className='container' style={{backgroundColor: 'rgba(0,0,0,0.2)'}}>
            <div className="chart">
                <Line
                    data={data}
                    width={50}    //
                    height={500}
                    options={{  maintainAspectRatio: false}}
                />
            </div>
            <div style={{height:300,backgroundColor: 'rgba(0,0,0,0.2)'}}>
                <p>Graph is plotted between avg runs scored to the year.</p>
                <h2>Conclusion</h2>

                <p>Sachin Tendulkar is the most consistent batsmen as compared to Rahul Dravid, Saurav Ganguly, and Virender Sehwag.</p>

                <h2>About Project</h2>

                <p>Project is made using Reactjs which visualizes Indian players performance. Data for players are analyzed.Visualization is done using chartjs.</p>



            </div>
            </div>
        );
    }
}
export default  Chart;