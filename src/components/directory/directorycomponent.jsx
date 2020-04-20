import React from 'react';
import Menu from '../menu/menu-itemcomponents';
import './directory.scss';
class Directory extends React.Component {
    constructor(){
        super();

        this.state={
            sections:[
                {
                    title:'hats',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT10ghT5P2dlv8djjcR8uLc7Ay_9yZ2QOKn2PE2mdTo1o-b2a_n&usqp=CAU',
                    id: 1,
                    LinkUrl:'Hats'
                },
                {
                    title:'jackets',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUWvoKhuF99HTYsV8G1SI0fzqAu2cxIMpIHxin09mMXmYe8vzv&usqp=CAU',
                    id:2,
                    LinkUrl:'jackets'
                },
                {
                    title:'Sneakers',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlNz1bxKro3NjBpOinkbzWVayBMuunuF4c20MOA36sYmL2GAkI&usqp=CAU',
                    id:3,
                    LinkUrl:'sneakers'
                },
                {
                    title:'mens',
                    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3GwwG3uZl40uMofByR9fPnlVmLo8XmOxUs6Vgej_V2TbeuSS_&usqp=CAU',
                    size:'large',
                    id:4,
                    LinkUrl:'mens'
                },
                {
                    title:'womens',
                    imageUrl:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFhMXGBoYGRcXGBUVGBcaFxoZGR4dGBcYHSggGxolHRoYITEiJSkrLi4uGh8zODMsNygtLisBCgoKDg0OGxAQGy0lICUtLy0yLTUrLS0tLys1LS0tNS0tLTUtLS0tLTUtLS0rLy0tLS0tLS0tLS8tLS0vLS0vLv/AABEIAPsAyQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwUEBgcCAQj/xAA8EAABAwIDBgQDBgYCAgMAAAABAAIRAyExQVEEBRJhcYEGIpGhMrHBBxNCYtHwI1KCkuHxcrIUQ1Njov/EABkBAQADAQEAAAAAAAAAAAAAAAADBAUBAv/EACURAAICAgICAgIDAQAAAAAAAAABAhEDIQQxEkEiUTJhE3GxFP/aAAwDAQACEQMRAD8A7iiIgCIiAIiIAiIgCIiAIiwN+7d9xs9WraWtJE4TgPeEC2V/ijxds+wt4qpJdMBrYmccyP2RqtKf9tNLihuyVHDM8bR8wud722eptFUuJc4lxMm8l1yVhbT4erNaXFlsrTP7+qgeX9llYf0d13H9o2x1yGuLqLjlUgN/uFu5gLbwZuMF+Vdie9hDajS0E2dwwAeq6Z9mXjJ1OoNkrH+G48LCf/W84AfkcbRkeUldjk3TPMsWrR19ERTEAREQBERAEREAREQBERAEREAREQBERAEREAXJ/tk8WBvDsNL4pDqh0j4W+tz0C6hvCuWU3vGIBicJynlK/L+11jW20Eu4uPaMdRxT7gKPJKlRNijbs6P4Z3QGU2udd7hJJynJXlfYxCp977WKQBc6qDEj7uIEZunEeyn3PvOpVp8b+EtiQ4AtJH5mnA52Kz61bNL9IqPEGwhzS2FolUllVvMAHK+R9h6FbXvvfLnEhgYxuT3kw7oAFqe8JNUTEhomNRe3Yhe8aaPOamj9JeE96f8Ak7JRrH4nNAd/yb5Xe4J7q3XNfsT3px0to2cm9KrxD/jUkfNh9V0pX4O0Zc1UmgiIvR5CIiAIiIAiIgCIiAIiIAiIgCIiAIiICr8S1OHZqrtGk+xj3hfmbYdoZS2lj34B9joSTBPqu9fabvUU9nFEEcVSSf8AiwT/ANuH0K/Om8xxDrP6A+xVfI7lRaxLxh5HeKNNlRoDgDyKj3jSDaL2MFg02HMQsPdG3Nq7Oyqy4e0GBqcR1mQsbeW8w5rmmm8WxwJEHCPiHSVSTb0aCjbtFVW3fTrbO0vgFrSJgaQcRjAhaM+tL3O5uHsQtxq7YG7O4NDoBI8wIJJucb5rQajg0u0JnsQB9SpYW3sizJI6L9iu0EbeRk+kZ9Q6fX5ruq4P9iVIu22f5aLp/ubC7wreLoz8vYREUpEEREAREQBERAEREAREQBERAERV+270azyt8zvYemPZeZSUVbOxi5OkZ7jGKhO2UwYL2zpIWrbZtDn3c4nlhHQRhcDU9FU7YPLe4tztPLPH1HarLlq9Isx432zTvtM3ya20vDcLUmZy1py14nEx1XOt4YXxJsMSALAdT5iuu7bumlWeC9gPD8Rghx8ptxNg8I/eiqKPg6hSrB93CfLxGQ2YIj1iegxUKzp7Za/i1SMvwXsTtn2amw4xxOHNx4jHSVa7dUoEE8RacxxcI9JWY1gAVPvnYm1AVFbuyxGkqRofjPfoA+6o4THF841PNa7s7OKkDoeE9rjtf2UviujwVAMrrG3dXgAZSZ9MfmrkY1BNFGcm8jTOxfYFRvtDyLhrWjncz8h7LsS5h9hlRpo128MOa8GRgQ4e2HsOa6erGP8AEq5fyCIi9kYREQBERAEREAREQBERAFBtm2MpAOqODQTAkxJOAGpWNvHe1Olb4nfyj6nJazt+3PrEcccIuGjAZT1hQZcyhpdk+LA57fRbbdvYvBDJDYmcyMz0CrLXwONpwjE42m/tyUTHY4TGZ6D9F5pPkXxnDM5zafMRHqs7JNyfyLkYKKpEs2ibmYsL5GM7z6rHe2cokcWRGAvfvrCmJn/dhlckYET6r09k20yy5RhmefdRnorRSLSMbxr7yMbDJe9ppB7AIxEEGRrnl/nHJT1WwDN9DiDYAwf0wUT28Iz6/O0WxxhEerKVweGhzXGCJveOq8OrF9PhiHZ6RyKz/uwC5owmR0N/nKhfRhe+yZNHO/FW7hVeTBbEESOxVXsfheq4eQggXIzEAkdQTaRqukVYm4WNQ2UOrDhaOEXdkOXc/RTLK0qIZ4Yt2ZH2DbSHVawnzfdAxqOIQSOV7/mK7OuabnY3Zn/eUWMa4jhcQ1vmEyQTa059Y1W+br3oytIFnDFv1GoVrBljJUUM+Np2Z6IislcIiIAiIgCIiAIiIAqHeu+cWUj1f9G/qod971Lpp0z5cyPxchy+fTGiq1uFU83IrUS5g497kTFmZWPVqgKr2zfF+Ft3GwAuSrHdnh3aq0F4+6ac3fF2Zj6wqsVKf4ouSagrkzD2veAbceY6axj2hWOzHB+IN5N5GOIMEwZ1wW27m3FR2ceQS84vddx/Qcgvm8tyMqDyH7t2rbA5XbmpZcSTVp7K/wD1RbqtGvMbe+vXpnh+inqG2POe85X19VBS2V1Mua7IkYWA+s491kTlfLr65GZ9VWpq0SMxi3KNBc8/XHpgsOuMAPkc47a6KwqMxMCNRgPTH9VibVhFhN8RAEEciMVz+zqK+o+7T/TecDJbieTsLeZTfdkhRGmXcTLS4SIydxcTcLRIaMYuVm7MQ9rHDBwBGtxP+F6TVHuyqqbvLjoNY+S9soBjSGQGxjrzMm59sOit6rSJ5icBBzywEHRYValEwCABGA5kY9dTivL3oeR5a28zPcD8QwtZZ+56obVYZjzAZ/iIF+0rCc3DWOV8bhSbsb/GpTm8T2cP0UkNSVEc9xZ0RERa5lhERAEREAREQBVm/wDa+CnAxcYnQZ/p3VmsTee721mcDpGYIxBXmabi0j3BpSTfRqRIwWLtuyh7SCsvbPDW0U5LHCq3+13obHseyr27QWnhqNLXaOBb7FZk4SX5I04ST3Fnnwh9xsdV5ewy/CqZcWDSDgDqF0alUDgHNIIOBBkHuueVWAqXd20VKBmm62bTdp7fUKTDyHD4y6Is+BTfkuzoKKp3dv6nUs7+G/R2B6OwPzVsr8ZKStFCUXF0yh39Rh7Xj8VjjiOnL5KqPyBtfTp+5Wz73ocdJwzHmHb/ABK1em6146ddMdfZZ/Jh4z/suYJXH+j5UxnASLi+YwIyFlBUNomQb3xzm8H/ADKnmD5pkyI7jLSQVHWZbKDeItP7i4OSqv8AROjGLSDHEYEEGDgCMv3n3yKREARrED+o6D4r54jv4LYJIsbmxvaSZOePPFeCSDE2JANhbhgxNuvbNcPRlPb/ADQDfGTMG9+3usaqwRgBhgRjY2E4WjFY+z7Q7H7ojKS8k53MTnmNBgvrqzoJ1tgYie976ImmGmik3ztpplmrncPcY21vOKttirxwP/lII9Q7Ran4trEVaF4Hmw5lgvHK3YrYNhdLBhpaBgP3ZSJ07R2SuJ1dF4ofC3oPkva2THCIiAIiIAiIgCIiAKHadmZUbwvaHDQif9KZEBrO2eFc6L4/K+SOzsR3lVFfYq1P46bgNR5m+ow7rfUVefGhLrRYhyZrvZoDXtcFk7Lt1al8D5b/ACu8w7Zjstr2ndtKp8VNpOsQ7+4XVRtfh0i9J/8AS/6OH19VA+POG4smWeEtSMnYPENN54Kg+7cdT5T0d9DCqH0uF72QbE5xOQy5rAq0SXFlRvCRiClGWVOBx8rhI5EYj0uO6iyZJSXy9EkcUYu4mbwEXwnSBOd89IX0ME2n/FybGNTfmV94vQ3sOhvy5FfKjuYPOBzGOV49VX6PZjVRNjcXtn10mIPYrxUpkg3ywPUjG845xjZTuOZIjIa4WIiMhJGi8NEYDDlONvpj1XK2dsrNpa9sEPDHA/ygtOB1m3ETY/KFhbXWrOj4ufCQDmbk39D9ArPa74AEgcxGeJN8TisLaGAshwI4mkYza5OdtZ58k9npM57tNR9fanPaTAMNkzAGnImT3XQfC1DiqUqT5hxgkGMGkjLUQta3Hu/grOacQcddCOy3HYG8Faif/sZ/2AKnjTaO5FUWkdHa0AADAWX1EWsYwREQBERAEREAREQBERAEREAREQFV4g2Hjp8bfjZccxmPqtUrVZa14uWmb5jMdxI7roC0jeGw/c1akCWyOEDQifbBU+TGvkXONO/iz28yBhe2ZnnAzupAD0nMnHSQe3osTZJAIOAIuTYgyQPaPRTtIgWGXTCJMiFnvT2WmvR4AjGMAL3iBIm0W+q88FsJGGX5jhByHaVIwzE4cySM5/fJQOdmYwE2BIi2eeH7C5pAjq05uBf1GWlhgZ6Kv2sOcA1odckEt5s4TI5E45KyIsZ0H1uSZ/N+4ULwQQTlibGL3sOuaPo7Hs1c0TT+72gA8JPC8yDBsBIGAxGAy1V3/wCTZrtCD6GV9q7KGseGt4uIFpbMSQ48PQfCCcoEYKj3PtBcyDMixBxHVSRPd+SO2IsHce1fe0Kb8+EA9W2PuFnLYTtWYzVOgiIunAiIgCIiAIiIAiIgCIiAIiIAtT3lVl7iSLl3O2Awz5c1tVR0AnQStNrHn9NT2Mj5qnzH8Ui1xlts8gHtLSLSQBnzvPsOa+gG1jOMfDI5f/oLzWIsJBt6RgCBivdQ+W+QnXTERGWeo0Wc3b2XCMHv362m8Ej5LwbjEzcZuEWsPXXLNfS6WkdLWOE69z+yvjhYzGpmCfQWzjrCA8kC4iI5EmRPpgNVBUztlhEYC/vnjipX2MgyMcJgZY52/wAr44ZXAz7xnicSM11oEZIcOCMtMAeQwMz79tf3hS+7q8WAqY3/ABCOL1kHqStgYbzFsYkQQL3/ALj7qh8UtIZxjBrmEnk7ib2xZ6dF6iel2bf4H2+HGiTZ3mb1GI7i/wDStzXKNybXwllQfhId2zHpIXVgVo8aVxr6KHKhUr+z6iIrJWCIiAIiIAiIgCIiAIiIAiIgMfeD4pPP5SO5t9VqbxJ75kDXS+vqtm307+ERqQPr9FrYN+QOhBMgZ+qz+Y7kkXON+LZE95LuhJz6mbSB+q9vdAxHsQes9OeKiab5zN7cRiIOtpj1X2s60Xw1ucLfNU2y1R8I1JtjcmbwcueXovlV3qJi0WmZxnT9yvjLg3AkXxAMRHMzIPzlKzJ73n4rXF+2HRcb+giJp808zfAmJvf58lHXdDTrAzmbRif2Lr3THmJ7kgCBoRIvmot7VCKZBOYEk4E2mdZn27mdXZ4GLbEEzBF54eGSBr005ysLftLioVgJvTcW8y0h30H7CncOKrTb+R5ucOMjIYHyn1U+0gHoZBygFrhcAWEkDsuxeg+yh8N1uKmOi6tuDaOPZ6ZzA4T1bb3ie64z4LcRxUzi0lvdpj6Lp3hLaYc+kfxedvUWI9IPYq7x5VOvsh5MbjZtCIivmcEREAREQBERAEREAREQBERAU3iCr8DervSB1wJwVI4QJ6DG2nWMu6sN9VJqOP8AKGicOcAxjdVlXAZ3AxOZwn69Fk8iV5GaOFVBEdPoO4ImCZIvnF+i97QbGMOsxY4T8+aMyN+eIsY5c8uRX2pEHHC50uBcTyPsoCX2eGnPne4v0n2PPJfHHAWJnCxGsm/UTyCU2zbEWzkCTHztML5VdzOOE58RsI/T0QEVFt4IHfkcTJy+XRYHiJ0U2YCX02yTzacBFrq0pRN7ibzbAxc6xfLAqi8TkltIZmrTFgcRxY+gXUlZ1bZZUB5iScWtGWjnXJzl3tqotod5Wu/MywnN4FugNsdFNTFnjC/wk4eUa5wYzxvgodouwz/yMGcIcSOfPqno77Mbbd2Cm+ltdMfw6w4KgGDatOWE/wBXCT1B1VrTrFhbUb8TTI5xl3Fu6l8FNbXpbXslS4bVLhF+HjkiOYc0nqVhOY6m80n/ABNMddCORF+6szVJTXv/AEji7bg/X+HRNnrB7Wvbg4AjupFr3hPbJDqJ/D5m9HYjsf8AsthWhjn5RTM7JDxk0ERF7PAREQBERAEREAREQBfHGLlfVh72qRSdeCRA72XmTpNnYq3RrlYlzi4jEkmeG0xh6hQOeZxPuczcxM+uS9tEi2nXS8DC0fJRcPp054GIjAW5rGb9o1Ej21umOFu7c85AvzUVd09YOd75zGF8lJ15ZHtYcr/JeHiDEx0i+Iw9RPRcZ1HgukG8z1ibHvCifeYjtfHSRyF9CpGmBMwDAx81xjJywH+l8cZF7gHGAYzzN7D2hcezq0fG2GgJMTbQ3EXw6YKk8TETSBERVFuImBD7X1vhmVd0TcydQSegnE46j5LX9/P89EHU2wOAAiOo9V1HY9lqXiXaSCMyBwg29fW6kDfLHIyLc8dMjiM1FQnzTFy2bwDYDEm9gcdCpqTPKTGQjnbCDkurRxkX2cVyNqe0n46ZESPiYQbjppzVv4ypkV2uGDme7SfoR6K23B4ZobPFRsvqR8bspH4WizRc+pXzxfsnFTa/+Q+zoHz4Vf8A4pLD4srLNF5/JddGsbv3gab2VQPhsYzGY9L9YXQqVQOaHNMtIBB1BXNDRLSIu0+xWx+AtvLmPon8Djw9Cbj1IPdc40mn4s7ysdryRtaIiulAIiIAiIgCIiAIiIAq/fVNzmANbxXkjG3TP/CsEXmcfJNHqMvF2ai6nHxAjDEERbpjP+0dTzzjH2xywOS21zQbESFg1d00zcAt6G1+RVOXEa6ZZXIXs1p4z1JBMkTMa+q8FhOt9cJucxFyAsjf7Ds3C7hL2uMS2BBxvJxN/RUz97NP/pqejDOP5tDrkqkoOLplqPyVoypMQYvAnGIAyiJj5c15i0kThmLQCcMrhRU9q8oJa7MkGOuE9lFV25gJMm1h5C48sAcP9Lw0eqZlvd66i1zEG98RpiVq/iV38bZ2zYuN4P5MAMMcOSzqu/qDJJc4NANjTq3wMnyXz9lrO+d9UtpqUzS4jwT5iOEXiwm+X7le4xb2dSpmz0N5U2cQcTxNeRw8LiPLbpl7rdd2+HzAdUeRYHhaADcCzifkAtE8L7AK20UmRbi43dG+Yz1sO668rfHwRatlblZHF0jxSphrQ0YAADOwsot40w6k8HAtPyWQo9ooh7SwzBEGDB9Vda1RRT3ZzjaXuawPkEF2EXs6LXWX4JqcO0vEzxuMRoabXY9Wqx3t4M43NNKoQ1ohrHucWsvNgMcTis3w14bOzuc5zg43iBEzi46E4R7lVY4pKZo5M2OWN72bEiIrZmhERAEREAREQBERAEREAREQGLvLYxWpupnMWOhGB9VzwtLXFrrOaYI5hdNWoeMt38LhXaLO8ruuR7i3YKrycdryXot8XJT8X7KKobLDqBTteo6hVFmiiu2qiCCCFq+69jDHuZ/KbdMvZbZUKwqW7XVKzWsu55DfXPoLyvUPo7LWzefs33fDX1yMfI3oLuPrA/pK3ZY+79jbRpMpN+FgA66k8yb91kLThHxjRjZZ+cmwiIvZGEREAREQBERAEREAREQBERAEREAREQBQ7ZszajHU3YOEf56g3UyIE6OWbbQdRqOpuxaY66HoQoXVAtk8fsHHSMXLXAnWCI+Z9VqLisrLHwm0jawS84JskqhZvhCuG7bSnB3E3pLTHuI7rCqfCo9zmNpoR/8ALT/7hcxupI9ZY3BnY0RFrGGEREAREQBERAEREB//2Q==',
                    size:'large',
                    id:5,
                    LinkUrl:'womens'
                }
            ]   
        }
        
    }
    render() {
        return (
            <div className='directory'>
                {this.state.sections.map(({id,...othersectionsProps }) =>(
                    <Menu key={id} {...othersectionsProps} />
                ))}
            </div>
        )
    }

}
export default Directory;