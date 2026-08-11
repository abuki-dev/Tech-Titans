//- At allsettled
//it runs everytign and doenst care of one of tehm faules

let urls = ["./data.json"];

//creat fruntion tat iterates on data then
//fetch every usrdata then
//for evert dat i fstatus is fulfileed display the result
//elese display warnd message at the resut

function getdatas() {
  return Promise.allSettled(urls.map((url) => fetch(url))).then((results) =>
    results.forEach((result) => {
     console.log(result.value)
     
    }),
  );
}
getdatas();
