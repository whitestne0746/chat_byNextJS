var model = require('./model')
var Sake = model.Sake
var SakeType = model.SakeType
var Temperature = model.Temperature

// ドキュメントの作成
var kuheiji = new Sake({
  brand: '醸し人九平次',
  type: 9,
  impressions: [
    { temperature: 7, impression: 'めちゃうま' },
    { temperature: 10, impression: '激うま' },
  ],
})

// ドキュメントの保存
kuheiji.save(function(err) {
  if (err) throw err
})

Sake.find({ brand: '醸し人九平次' }, function(err, result) {
  if (err) throw err
  console.log(result[0].brand)
})
