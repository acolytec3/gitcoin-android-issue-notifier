var _ = require('lodash')
const axios = require('axios')
const fs = require('fs')
const es = require('child_process').execSync;

process.chdir('/data/data/com.termux/files/home/gitcoinIssues') // Change this to whatever directory the script is installed in
data = fs.readFileSync('lastIssue.json')
var last_date = JSON.parse(data)

axios.get('https://gitcoin.co/api/v0.1/bounties/',
{
    'order_by':'-web3_created',
    'isopen':'true',
    })
.then(function(response){
    _.forEachRight(response.data,function(issue){
        if (issue.created_on > last_date.date){
            if (_.size(issue.interested) < 10 && issue.network === "mainnet") {

                var amount = (issue.value_in_token*0.000000000000000001).toFixed(3) + ' ' + issue.token_name;
                var message = 'New issue from ' + issue.github_org_name + ' called ' + issue.title + ' worth ' + amount;
                console.log(message);
                var command = `termux-notification --title "New Gitcoin Issue" --content "${message}" --action "termux-open-url ${issue.url}"`;
                var output = es(command)
                console.log(output)
                fs.writeFileSync('lastIssue.json',JSON.stringify({'date':issue.created_on}))
           }
        }
    })
})


