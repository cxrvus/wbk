alert(JSON.stringify(Object.fromEntries(window[0].questions.map(q=>q.answers.find(a=>a.check.value)?.answer.value).map((a,i)=>[i,a])),null,2))
