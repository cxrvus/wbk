answerData = window[0].questions?.map(q=>q.answers.find(a=>a.check.value)?.answer.value)?.map((a,i)=>[i,a])
?? window[0].cardList.map((x,i) => [i, x.xmlValue]);
alert(JSON.stringify(Object.fromEntries(answerData),null,2))
