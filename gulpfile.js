// Criação de variáveis
var gulp   = require('gulp');
var sass   = require('gulp-sass');
var rename = require('gulp-rename');

// Criar variáveis para "automatizar a busca de diretórios "
// Sass source
var scssFiles = './src/scss/style.scss';
// CSS Destination
var cssDest   = './css';


// Opção desenvolvimento
var sassDevOptions = {
  outputStyle: 'expanded'
};
// Opção produção
var sassProdOptions = {
  outputStyle: 'compressed'
};

// Testando a função
gulp.task('default', function() {
  console.log('Oi sumido');

});

// TASK 'sassdev': para executá-lo - gulp sass dev
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));

});

// TASK 'sassprod': para executá-lo - gulp sassprod
gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest(cssDest));

});

// Executar
gulp.task('watch', function() {
  gulp.watch(scssFiles['sassdev', 'sassprod']);
})
