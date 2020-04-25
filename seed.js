// var mongoose = require("mongoose");
// var movie = require("./models/movie");
// var comment = require("./models/comment");

// var data = [{
//     title: "spider man",
//     image: "https://cnet1.cbsistatic.com/img/rfzZ-7G32v_qEt2uCD0b4KB2rho=/940x0/2019/03/26/13d0a566-7355-4381-be24-dee281227504/spider-man-far-from-home-promo-image-1.jpg",
//     body: "spider man movie"
//     },
//     {
//     title: "Avengers",
//     image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExMWFhUXGRgaGBgYGRoYHhsaFxgaHRoYGBgYHSggGholGxgXITEiJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy8lICUvLi4vLS0tLS0tLSstLS8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQcAwAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBQIDBgcAAQj/xABFEAACAQIEAwYDBQcCBQIHAQABAhEAAwQSITEFQVEGEyJhcYEykaFCscHR8AcUI1JicuGCkjNjorLxJEMWc4OzwtLiFf/EABkBAAMBAQEAAAAAAAAAAAAAAAECAwAEBf/EACoRAAICAgIBBAEEAgMAAAAAAAABAhEDIRIxQQQTUWEiMnGR8AWhFLHB/9oADAMBAAIRAxEAPwBe99G1oa4BS0PX3OaA9h62RUioFArdNSt3WZgiKzudlUEk+wrUawsWhNeZ6HxC3EOV2to38pbM3uLYaPeuldl+w9m/hrd2/ZZLjCSFvXCCPsuM0Fcw1ynaaZwku0Lzi+mY/hra0+tXCIpLjMRbtYu/ZQeC3cyLJn4VEyTv4s1GjFAilGGb4gjUGqv300IL2lC3rkc6xqGxx+Uan50NiMYrD4h86H4BdD47DK4DJnaQRIMW3OoO9bi3wPDobeSylwKLimEB/wCPetEE6fZRyfIA0jk0dOPDGStv/X7/AH/bOV8QuAneljkGuwNwWy1pcO9u1nuWltWyEAZWFkO+do3JUEc96B7TpZZL2VbQ/wDS32FsWVBGW8FFwXAOgiPeleRpXReHo4zkoqT39f77/f8Ag5hbszUzh69gn0okgttVFs4Zx4ya+AI2aiMPTVOHOdYNXWOHMTtRFFK4YCp/u4in68JmhsVh1UVjCU2K+C1FFA78qGvsTWMVtFfMoqlgaqe6axglUqxbRo1LYqeSsYCsYR7txLNseNzAnQDqWPJQAST0Bo7GYpbYaxYJW1oHuDS5fPNnO4t75bY06ySY+4C+ttMVcJg5Ldpf/rs2f/otMPRjQuDsm9dt2ra5izBVXqSd2I5fcK9b/H4I8Xkl/fs871mV8uCNX2I7MW8TeWVIt2wC4BEcstvTmY112B669jUjYcvp+hWYxGLscI4ebjmcg5aG5cbQKPUwB0A8qW9mOKunCLuKvsDeZMRfuRybxMFjcQoUAdAK5PU5Xmly8LSK+nxrFGvL2zn/AAXh54jeumxlF43LzuGJClDcOVgQDDCQCNjIPWrbvBMSuMGClDdy5jDMVUQTLNlkaDpzHWj/ANgurYh8sBLdpAeZLFmaf9orV8LtIuJ4jxG6YUObanpbw6gXY9XSPVKnmjFTpfRXDKXC2YvF4G5Yum05VnCqSEJYeOcq6qPEY28x1p1d7GYrmbI/1t+CVLsthGvYjvrohi3f3B0Y6Wk/0xp/8updrsReu4kqr37Nq0AuZC9sXLjgMxzbMAMoHnnqVItb6EvEuG3cI9s51705mTuyWI+z9pRvmgddaY8U4DxOzYdnxSC1bi6R3hJBtAMCP4epGVY15Cpdk+Gi5ig7O9zugGZrjFzIJ7pZPLNnb/T5077fYwvgLtuyMz3LtvDr5s15FYe0OPY0OEXtjxz5IaizLcNwvE8TbbGLigqIxYvcbLrbQqXEIRAVmX50L2dvcVxJW3hr7wqzrlCorn7RKk6kHTUmD0p/+0HELgsBYwFs63AFY/8ALTxXW/1OVB/uamHZ7EDhvDHvMP4hXvCp0JdwBateW6D1LVuC+A/8jJX6hFb/AGZY1QTmsE7xnfX526TJhzbZlcEOjFSsScwMQI31266U17C9pbGDe9cxmKvveuQAp766P5mZQoKrLGI0jLRXYnDvi8a2IujZjfYdGYnurfsP/t1qJ227Y8TsriR9m1H95/8A1pbxbDfuzhLgXOVLBUJYwDGug3Og6waj24v4jE4wpbuX7VqyAngL2+8dvE5kRmAGUCOYah+xmDD4x87XLnclWZ7rFzCjwJmb/mZmj+k1jK+xweyuK1MWterkEeXwGsn2h4Ffw8G6FhiQGVswmJgyAZgE7cjTftNxW7juLWsHYvXbdqyP4xtMyanKz5ivRQqj+pjVP7VOKm9iLGCtESCHc8g9yUtqfQFmI6MtbQUm2JeC9lcXjFLWggQEjO7FQSNwsAkxttFS4v2Ax1lGuTacICxVGbNAEmAyCdOUz0mtt2rsXbHDjYwebMqrbzIYdU/9y4salzrtrLk8qxmD7XW7PDf3a1dv3cWysMzpcaHukgnvHEFUU6a65fOjQplcP4/eiDw05oq7A8PYAabCm1kDmv50jGSBUtVd3GlMbODolsGY2ojGPxeELretg6kJcHmLRYMB1MXZjyNbTsFw4YW1+8XoR2JCZoBVTzM7M0bdB/UaA4Twc3sShkqLZzsR01GT/VqPTMeVWftH4oy22w1pc9y6PEoXNktSQXZRsNCAeW/KuyGaXte2jkyYl7nNj3jrYPFm339wMLTFlAuhVzH7RAMExpr1PWk/bM4a3hnUXTh2e0bcLLd6sQBct/a3/wCJoRO5GlcwtWLII8Ca6E5ZjXUjzrX8Z41hb9j91wOe7iLl22WhLhd1QkyzsuusabCdABQcOLSApKSbrZof2TA2MLcJXLnvbHeFtp89S1Nu1eNBFrCrorsblz+xGzGfNrhB84as1wnjVjDWksPcJdM2fuke6oZmJy57alSQCAYOhBHKvmJxiNcbEXgwtOwX4GLdykwMgGYZ9SRyznpSZWnJ0UxJqKs0d/iP7thLl0QHI7wZgSJMC3bIBB1GUb6FjvWXx3aLE4kIb+RVtyQtvNBJEZmzHkJA9TRPE+13DrylbrMwJDQbN8ajb4QOtZy5xTCNikIBTCLlzkJcJeJZvA0tBMJy2JqcvoddnQ8DjRgOHviHHjKm6QdJZgBatn/oEdS1FdnsIf3XAm4Ze2vetPO9dRiSesG9cPrlrnn7Qu0trGpbs4dn7uWe6xRk8UQgAYSYzO3rlrQcU7Z4e5ae1hWuG4wyJNq4gUGFLZmWJVSSPMCtoAIH/wD9PiZY62lOUD/k2T4j6PcO/Rx0px2xxTXr9rCoA2UrddSSAzM2W0hIGg+MnpKmlHZ7FpgHJuK3dvbChlUtlKnYhROUg79VFaHhWO4bcvXb6vDque5ccXEUCAkk3IUGNI9Y51vAXpku13EWIXDqYznM/KLdsg+0tlHoGqOHxbYPBPcWBcbx+IEyWgW0IBB2KjyJO9A3LiubmKdXNp2VVyozN3KHkoE+I5j5Z/Kp8S7S8PuiHXEEAhgDh8QPEJg+FR1NCzVovsY/FXSL2J7sLaViqW80FmA1bMd9IHqatw+JGDw9y8dWabjD+YmBbUHz8PoXNKrmPVxmCXBh5WfBcLlV1c5D4hJKrtymgeK8ZGKKpbD5UJe5KOviAORcrAEiZPstDzY9apGn4bx29dwl27fAsHxwbbliFQauCyxIOYQQR4az2A7Hs6ktdl3E3GfMWLup+1qSRp6aVfYxS4kph7QuZAVDFrbp4E13cCWZgpMf1daZ4njNvCl0vZk8WZWyOysCBHiQGGEZYPQeyyVsaEnHaAOC8WxGZ7Fx++W2GK3xoT3bhSrzEmTo3MKZ6mXC7C4jEXGyCBlnTd9Sx9YKz5zzmgv3+x3YtYRHctAAVLsGJgM9wQF1POd962vZnhHcWlB1Y6serHVj8yaLegHxuBoV0AFBN2dE1qwtRZKmECwfZpYksvtr9aA7Q8JyDwknYAcyToB86r4VxJk505x9hMXayMSJ18LFGEdGEEH0NN0LsRnu8Dhme5rl8Txu7nQKvUkwqj086S8J7HtiQcTfLLiLhz5kYqbfREYahQNPPXrT3C/s/sq6uXvPBkLcu3Lig8jldiJ861dqyEWKdyEo5XxPsTfzEm8lzzu4ew5/3d2GPuaHTszdClLl9u7527aJYU+TC0q5h5Emuj8UxIHKstxfiQXSYBrOTCor4FNoWbKhVUADTSl/EcYCIpVi+IlmJFCfvJbSlGB8XBNfcFhM3KjcBw5rraA0wxuPs4bwN4m/lWPqTtW2+gis4HXatV2ewCR4lpHh+0lmfHYuQeYyn6aV0LgGGs3La3bTB0OxH1BHIjpWaa7AEWeFqQNKpv8AZey7Kzpmg6DlI2MbEjX50+twIoyyNdqFmKLOBUKABpQ97hycwKcsNKXYvYnc7D1JgfUihYaFiWBLlRp8I9Fn/wDLN8hWOfFd3ibxKA5nMjb4G0+kj3pj224picKbVjDRmuADMdWliQIB09/OsbwziNxsUMNitLr3cpfTRm/mUabzt1rNfZaKajdaNkO0IX4bIHq3/wDNAY7izXlK5VCyCQNdZjc+v0rS2+yFkgZrr6xyUb+s0u7QdnrdhA6MxkgEGOR30HUgRU5WVwuF/Y67MYZf3e20bg/9xp2FpV2Uf/01sf3fR2mm5oo55/qZGaqxV/Ks1cKyfafiLB8oOg+p50RT7gsatvZF1EGRPy6U2wuIzEFB/j3rL23NWXON2rJyXLmVomNadoCNwmJvNEAesfjVbXCVOYmRyrJYXthhwARiABvrP1EVosPxpLqB1Ksp+0KwGhdispzBvlWC7SZBOWQRuCZBrZ8bvLrvXOuN3yzeVYIpyTV3D0/iAedXYPD55Appw7hbLdWRIkTQCkbTs9w4JZylY1PvPOuZ9u7SjiGICAgZwY5DMqmPrXUe0l25awd1rU5wnhgTqYEwfWuP47DJin75RcuXLwzMpGzSZKtGXLGVdSCPOqwlxTYOLk0kbnGYjDnAWlW3DBV8ZX4jHjJIGni21Oh5RFGdisWto3hag22KuOmfKAw+QWud2ez82rYWbtwZ89tGBKaiDBaHEctxTTsSz2sR3Cs2Uh2ZWXLBjTQiR8IFLzUk0h5YnHtHW7HEAxkgA0xucQCKGJAEgH3MCPnWTEgUp4quIu4i3ZskHMqvlYmM1pmII0gSSs/20lGUbZuV4gLj3lDwtsqGYmBJElfUafOoKpVwBMLqf7tI+QLH3FJOFcIe26W8QykIGvXBr47pI8RBGwjbz21p0twOJRlYk+Iggif5dOmg9qDDSMlxHjJGMV3ZRkuuoLgxCFgoYDkwLCf6fWlOIwov8RFwNbH8VWCqSVMATkMQBpOsfPSrP2moBdts0LmTIDPMENqNwRIM9D61muA8ds4W+l1mFyDAA1gkEEkGPSZpJJuSZS6idzRuvIkD260u7SjNaYf0z/126Qp2ztsrMHshQdZcaGNomeX1of8A+KbWJYW1vITtlEief2t9RT8WxIqnZp+zZjDoI2L/APcT/imBxygxr76VncPxO3YtHvXCAsYkxOg2HP2rP8Q7bKuJSAHwzACU+PPm132EbCJOsbQSosD/ACbDG7TvewtkEjNcL96w0C20JMkofCSMizpsdjpSnF8ca6C8ZVJIXeWHUztPIVo+FdkEu4fOmixIBnlr7+9YzjWDIMtq3lED+0AaToaeUElZRcXaQw7S8d/c0GX/AIjfD/Tyn16VzjHY4vMsxdjJMzE7z5+tb79pnBLhVcRM20ABiAQSfurCWkQpK22fJuIPsTHnQclE5uwG1ImCDqPPUz9RH3VsewfHHs30tl2KXDlIMxJ2IA8/xqjg+Me7b7m5ZAtsIGVApHqd/PWgMLhzZxQEhhaKvuBKqQdI5j8DWWRPTBXwdT42DlY66VhMapNNe0/Hbt+4bVlGe2PtLpJIBiSRtNJjbxiAv3aKOYBkwBrodKm5lo420aLshgwc08/wrbYTBplByiaw3C+0aWrYyqsn7REnXlG30r7iuM97u1zXaDApZZUvAOH2bni+AW/ZuWWLKLilSV0InmD1rnVuyuFtfu8xcs94qZhqyNdYhhsG0PLmCOVEWe0FyyfC5y8w5kD3NY/t5xh71wFgsCcvPLO6g+usedNH8x4T9t2aDhGP7iGW7ZCTLABZbrs5IMdaK7MYdMRibmOk6Du1A2MiSfrA965eVY5VzCDrExTfC4zFYae6aAwAI1iNQNAZO515U6xJbNP1Dmqo7WSI2256/dWLxvar92x63VAJtFkKzyEaEjnJYabRWPTtXjVXKDAII3uGQN48W3nNAYa1eYNcPw6CAI1jbfpHWnUa6JRmvJ1XE9qbPEHV8RcSzaEeFSzXNNNwPCpn1IFbnhK4G3YU2AotEEpEjMNswBgmTzMzp1r87qz7KARzImQNtRyP0rrHZfjVp8XmaEQCFkwFAgCJ20p4w5bYeSrRn+2PCb124964WZWd2XMpUDMAIEnkqqPYVkbXAHuzGVEG7uYHoObHyAPtXc+2HH8L3fdKyOd9NQPf9b1ge0vaXD2MOLVlA2JaZdhItqf5R/MfPapZXql2dnp8Sceclo5zewOUAggyWEiSQFIGukAmdtdqN4djVtMgS2qEzN10F1vYMIAoC9cI0DmTrMxqTJn31rU9jezbYxGuXXKhNF2ltQDAnYczFBJ9nNOdugLjvGrji0Wc3BkJB0ESzSIGg15cpoHC41mBXLMwAY1BkayNSdNOmvWukWOw2EynMHJHPNl35+EAUpNtLKlsIiLH/uMe8bnqM2ijQ8pPlSzyKPZ1YeWTUUO+zfEeIG1kdmS2dWLfEfTmCepqfEbGflWS4f2xxNt5vg3LRnXKEPkVOgOvI10HBBLlpbykMjqGUjoeo5HyrTzc0NDDxkFdr2sthrthriB2AyrIksCCFjzIiuM4DEuG0+FjLACTE/TYUXxPibsA0wwOYczIMg/OlmN4Ybn8TNlVuXmYO08hI9qCfLs89pLo0NjFq+a3bMKfsayjDVYnWD5UsxzDNK/EFOvP9QTVnAOG2kzOHJKppygzPKgbbC7fJmFEx+ulI470CzR8K4y4S1FkuHuESP5tBH3mmy8Rxb3fFYtrbUkEFtGGx1jpSHhHFP3dLtsNOoe3EGGJAOvIEAfM18s8buKGzgPmBJM8x5QB+t6Vx8nXjmuO2e4vhO5uXLds+BSMreuoX1APTkaW3seyDViIEwfzHKRFeS9317UmDrrt4VloHXKCJoK86u7XFH8NcoUHr3YA99GP+o1bHi59kMkkuim6+Icq51bcaCEjYqp0meZ10E0RY4OXHi3JJJZp33MDQkmtL2J7PviHVma3k8ULmEll5N0Gs+dArespfKWxcYLILMVBZuZCgeED1NdKUVohtlmG7NpaAdySdI0AHy/OqsVw1HLXXBlVJEx8ImAQI9jWsvJbezm8QYQPE8+Y8IPlSrtOyrYhYDEZZG8cxFMtgejI4bBtiLwtCJy5j00GigcgNAP7pqvC32Vu7Z2tkFgdFOpOsgg66DWpcFxvdYx2kaoQPcJt8jW5t4XDqbeMuIr3m0sgiVhd7zjnB0UHnJ5UJyUVY+DDLJKkLeE9jcS9xL3c3jb3kHKWHQDMpKnXaqO1dh8NdnLcQPqpdShn7WhA1nXQRrpXTuz/AB0GSxlubMdSf1sK1N23bxFs271oOjbq6yD7ESD9al7l9F54nhdM/Ng4ncOZjqR5z9KGuW2Zc0Eljp6cz89PnW87d9hBhC13DEtYMZkaWa0ZGs/aTzOo59RguK8WuDwpoFEaeW8+9BrZSWVqCVkMQlqyAJzXI15gHp5mj+z/AGixODKXVBGHdsrrsrRrIB2I/mEe9Tt9lybSvmV8y5pkiJGxXeapx/A4w+dGZu7UZwRtlJ67aajelUo/P9/8JvFOro6lxjHoMIzIRN6AsaauJJ9lrBLh79wtbsDPl+KTAE8iepEiq+EcTF3DLZZvHbaUBO4I2Hv6nypt2Rxy2r161chXeGGbQTBDCevw1z5ruzp9O1wr5Bu1V68FWy1lI7tWfJsssRC+kCodj+2lzDWxZCowGYJmAIBdvtT9mSaE7U4nLeaTbGYR4TpvzGY1nzhwArSBPLy8qRaR1Y+35Nfg8JbhielJ8XiAsrPhJ08vnRWIulYHWgMXbnQCqw0zx5dA+I4o+XuwYU/WpYKNTMN5aT6flXwcKdgBlJPIASfkKL4hwE2lVTcHewzPBkIFE5cyn4439Y6mrVYkIOTpEMCW71XY5U1kkco+omDUeK8QJ067DnH9sSo9aq7pokKZ6yG+UiRVDKuskqecr+MmtKKo9PF6Tj2X9m7We8z3PgRHMaxmKkKCRzkk+1GdwF4fbueEd7iLunOE0ED+Ube4oTg2IhMRbDiHVCNCSWtuGCrG06/SinUDBo2ae5vC2ZiEDi+WHubQP+Kvh1D+Th9Wn7tfsRs8QuqgS2cgBLSDlkmBJjXYRQgQlyWYySSSOp3++gkxknwKW89h8zTNOFXGsG811VOUlUUSTDZd2316ChtkxjbZbYDd5cbWPEwGkH+RQd4oLiOMDINSJOstmGx8gR8zS7PcW1mzltNVIH0I2pVcvk6kEU60LJH22ha6gXQltxWwxHFGd+irCqOiroPz96yHCX/ig9JNPrYnbeuXK7dHs/42CWNy82dR7C3LdtTiLh1gkf0jbT+pj9COprW4PjwuSTC9K5libptrbtbGBm9F0AI+vsKvbGuhVRu0R0g860YybpIaeLHODyT7fX0jonG8aGQF4ytIDjkRurDmIP31xbtvw0WCAiAK5Jzb6kzHpG3lXY+FYAXcBctgyw8QJ/mj6DSNPOufcRtd/aay24nKehHL7/qOddPF1T8HluukY7gfFgtsW2YrGgPTzBo7tFxFEstat3u8a6FETMKDJmNp2pBZwZDQ2wkHXmPyqjH4fuz3g6xHty/XOud4lyuy3PJ7fXjsq4Y6i8J0BIEnWNa0uItDv/4gEAHnOYamQZ96yds6GBJ/WtOrWOYDXURlAP2fNa042QxTSuwXE20Z5UQs6k/hFVPnza/DtPL2ppw/h3eas2RANTyFVnitsP3eXw7KSenOPrFL7dsos/FaDsTf7xEbqNfXnQ9sGd4qjhp0KHnqPX/NfGcqYPKjONM5UzV9nMKt5nFy4VtqFLR8R8U5ADprlOvLoaYYTsq2MuEBWtpDZiZDEZpmSPDmIUkk68qzXZ3iJt3RpIbQ6xGh8QPUSa6N+yfGqBfS6x7w5dGO4O4Gp01B9K6cK1dEcsmlpgnHf2Zpbs95auXDH2S0GQD9sbqSI250s7D9kLeLuPndmQGAuZtIAME6c2HsD1rYdq+1a2rPdB1NwmBEaCCJaNNJB9vOsv2L47+6XSCpKXG0jcGY95EA+grpUHKD0rEx5p8U+T/k3vDexOCw8julVmVlFwHxQwIOVjMaE1w8cOQP+6li9tL7OFYyGYnKSY02AHtXSe0v7QLYxHd5sq920NE+M/CD0BE/9NcjxGKZLyNtDr8swpFBR/V38Dwk2u7+2aDtDw5u7t4hso7xVARRARRLKPNvEZOlF9msOn7szFAWhxmO+551VxriJbBIDurR8iwFT7NYsHDlSNczD5gfnQaVlLdGLae6b+0j6VWysF029qvvP/DIP8v4UGbvh36aRUbHff8AH/R8w3x094a/jWf5h99Z/DXjmprh8aQZ0+VSlFOWz0vS5XHHSN32gvK2JBZZXKoOUx11B96e8H7KWbuVrd1iSNNQeeoggQR0msPjuMNmB026Dzo7hXau9ZYFSOUiAJjp5+ddWOC5fi9kfUZH7aXg7N2a4S2HUgtmmOUbT5nrWE7W8ONq+xGgJn3/AFrWq4D22t3FGfTzA/Cvccx6szEFWXSNBqIHUUcfJTfJdnnylS0cvxfZi5ibs2EBLqWbXKBHxTy3/CszjOF3VGUqAB711dO0CYVy4AKgeIAfZYgTp5hfnVHEe1OHuzlUEnrynyIpJRabajZZ5pNcW6s5rg+CqUe8FI7sAsORBIWV8wSNOh8tQsW6ByBsJj5wPoBW74viFFm5bTKO9XTlDCCPqIrGXuFtfAZNG58p/I1L3IyqSVJlFgk4vjtrsv45iLa2raW511aeoG3zJNJuCcHOLxVqwDlzsBmGsCdT7CaOxXC2SzmutqjAZSGB3A18tRtWh/Y3hM/EM8aW7bt7khR/3GjSOZthHZbsc+LR2UhAuisRozfy+Qjc+YpH2i4Hdw9wpdWGGumoIOxB5iu9cNwKWLSWkHhUR69SfMnWlPbLgSYmzmzBHtyVZtBHNWPIefI1pVIC0cV7P4d3v2wiliWUc48RiTGw6+U084tgu6U37V0oiZbTMZ8WUABvOY26+tb3slg8PbtXRbOdkBUtqNXWTpOk66bgQOs4G/xG7dudxcCKphMoVQF8fI6nZn58zV8MOLaZKT5K0Z/vEfXOxY7MQYPkCZMe9MOFXXNxS0k5gQqsR8Jky0Dlz5b10Dtlaw2HwL2Wtr3oHgZRBG+Rg0asCB9etY3gcNZxJOjqFXQx4ZU5R5NLTEaLvoDT40+VIzmnBtmW4v8AxGa7Ml2JHvyH3ULeu3IRWgqpHTyGpHP1ojidwllVNDM6coOn4V7D33zEFoZQYMTDM2UmOcAtHnFTy7mVx6iPrrq2FYc1b8QfxpXguKLZzAmPtQPlQNlc7MGYmNhIAk2mI8PPWPlR/EraphbeSBOR3C/1JzjlJ+6klPeh0tCm7iAwMBjM8uvrS9iefXr+FH/vysRvtBO/y2gRy9etLb7yxPnUwsMRRIIG/wCNWCQaXLeI29aaYz7LDZgGHuPz+6kkdnp2nF/Q37nNYFydjB/XpHzqvDgsQBV3ZbDHEFrEwWBK+ZH6n0Bo/hoWxJfRlOx5FTsffSujHJRlGT6GlD3VKCOidhOEJZwz4i+JhjA8gF1+dG8JxZxWHuXea3Hj0jQen5ViuMdsi+EW2ugYkkepJ+7LU/2d8dVWuWjs436kcvYag+R61fLbk2v6jyo/YNcui6by82W4sdCAY+RUVleD4x2Os6U64jc7rGuORf7wf80Pwd0t27jMP5iPuH/b9alnnpuPmi0I3xsX8S4k7XMo5flJoM4u4olWZSCdiR+t69bvr8RHi7wa+RVpqhiySpErG/ODsQemu1Ql+NQ+C0I8o8092evcXvMMtxi6Hkx1HPwtuNR6eVaXsHxEWXfKdLgAnY+EzlPn+VZa0AdOX636VdYm02Ybcx+PqKmnTKSj7it9n6HXtAC+VVJHXY/KkPbTtMi/whbNxhHhzFQW0kGBJAB184HOhVUqhePEGCgE5CCRodQfX2J5agcTxCYeybl9xddiQitK6jlnMlVB5855Fq9HBhivzZ42XNK+CI2MTeRVdJt28jyi6AljE6/GfilmJbTU1n8dgzeuM+ZVULmzeKP5eQMHXbr86rucTvuzZGa1cc2lCF9kRSCTEQkkfZA1oTjzZGCm41x4OaWLAZwBpJIB+I6daedch8d0F3sc+Ig3cQbmQQM6wOgMpMn1qV62qWywOrgk7j4BC/8Ac3yHQ004nwLDYXD2yPDdBAuDfOGBgadTB8gD51k7+MYJfJnUog08KhBtOsTmEDnBJJrKcYjtco6EVws7kr9n8as4K7G+F5t10AI1lvIa1PCY1EUqPibcnaeX4fKmHZ+xFwE67EgjUkzB+U1yxVu7LN0qA8XwxgwLNrA+HQGBE+ulQbAgxOY+snlsJpvxkxqJ5jTn7UiuYpj9qAKM4pMEW2RvWI0+/wDLlVVuzO49q+ren0nnz8z5UfkEA1N0x0A3cLppFHYZBcwxA+Ky0+tu5sfZpB/uFRNscyKGw+KNh53HiVx1Rtx+I6ECkktFcOThO/AXw3GnD3FuKfEpkfroRp70X2m4kL1w3V0D6kefP36+c0pxtuDoZHI9QdjQ63OXKnh1RbPLei65fnSeUfKnHA7rIZGhGoNIVSDTTAPVo5HE54Y1N7G3GsRnuLc/oJPqoP40RxRBbw9tftOdfQRP1j50vxlshNd20A6Dn89KH4pxAu8ckAUe2/68qRK5IOWorQN+6M22wYT5SIH31qOIcGsnAretMTctE96CJ8DQOm6tBI6FqzmAvSxU7MCPyrQ9muJLbL27ihkcFHB5qwy5h5wYJ578zUc6alaFxy/GjHKozGcwPIjr5wNqNwtzMIbfr1/zXzitprF17LAHIdDG6nVW91INewrh1YabfqKTjY8crize8S4w1vK8j4TEjUBjqwgwZAAmToACBzzGKW9evZnJKx8IgQp2AVtp31331p2LSYl++uuhnZAxUjfyiSI8jrNRvi0shCok6qGBP9w2lfbTavRnk1o86GOmBYW0tlJgA6kwTHprvGw96S3GLhnMjM2jdI/80dxC5spJg7xvHl50Lg+JMjMVQG2Y0HIbCJ30H1rm5Ps6aVUXXeL3r2QXXDBIA0AOgjU89K9jlzWXA0lgSBGpjT6LUeIXbJt5kgs2gA0g+Y5RUsOEbCsAT3oMtPNeQHtNLCXJjSXFUZvD2wLilwcoYZvStZiYt3LbITDONSNwFeY+dI7VqJ7w5eYIgyen+aY2sR3hsmZylyP9pG3+mjjT50aVcbK8c7FdDy++kWKOsmPanHFASImABtSO5Z3JOlGa2JFg7OTTfDYkZQNzSc0RgboU686mhxpE6kUPirE6hSfevt/GAjQQBp6nn7VSl4k9BWbMkSsMSApnmZP3VBrfSotc1PSp2GJMUql4ZdJuJZaEGnGDvKsHLr+vKl1oqaNW4iiSfaqpATSJ428SczHXf5UlLSZ60TexBYE7SYA6AfoUITTJURyT5MJtsRBG4r5exjLckGA306j5ivtjUVPD4PvHVOZPh/H6fdWyR5IWMqY34hwq7i1t3EYG4qZHk/FE5SJ57j2FZ7h9wqYOlaK1ijYvAgwhYQJ+w0ifcpmHkZoDtNgu7vlhGV5YR1JJOmw35eR51zpUVn8jXEIAsdWGvqRIEVW5AIK6ddeXQe9fbl5FDZvEYhfIzv7R9aXm4T5dBVnJkUiOMvyzfIe/+ATUM8JlBCncyOtQu2wCJO5J+78or2YknKf171l0F7YvbEEEzE9a9+99a+Y1WmW/D8KHCzU/IwWuJUnWmuDeRIkEOvyIKmP9wpBly66024K+ZgoJ3U68wDt88vyqmJ/kLNaDuIgajek15REx7mm3EwBIGupkz91IsQ7HSDFUn2JEHq42ulUxRK71zydHRjSfZEHYHlP11mmNvBhXGYyNCeelB300mopfOg8orLZmuLod9q3stcmwgS3AGggSBrSrh9vMwHtVWInSaZcETViTAAB9+n0pWikGmxeVUMROx0J5/lV17DsvyBkajxAEa9ddfeq1t5joKnfVpkSDptpttTqbROWNVZBjsK+Fa2eB7Op3Ste3y5mOx11jTpWcZVM5RGuk9J51RSsm4fZTg1PKT6CaIuoVZSCAwII8iDp6a9YqiSNCT6cvlV9wACnc9UaOO+zR3cCrMWJ1MHqJJBY+4AUdAKF7SWc9qRupn25/h8qO72ahfhlK9RU6FthuC4PYFokstwncx8On2ddD/isveSCdeZ+n4004RiLdoyylgQZWY95qZwi3TK7co/L0pOx9Izl+5lZdJ3/Col7ZnMD76fdRnFsOFePL5UrviBFG9C+Si/lOi/Kq8Ms61C4JpxgeHzbmYJ1HpSjAOSpcOc27o0mdPnRNywV3qq7Zkab8j50y+UF7RdxN7eYgGdTS3vgBpOvU6fKnl7hLOpfKzAAFjsup5TrHKkF1ADoIqk3snFaIqskRvTG1aMRyMT7TH3mgsNObXzP+af2cPMbmp9loaKLeFnQazpHWl3FuF3cM4W6pWQGXzB0B+YII8q6L2Y4RbDC5dIGUgqp6jnSz9qS94bd0a5ZU+h1H40K2aUrMFnnrAphgjp60Dbtn2o2ywEco/U1mvkWMqYy4fhiEJI56VfhcFmuKSPDmE+2sfSo4K/4SvTX2/X30Vgt48WZtFhZn9H7qFpLYzbbodYzFEow6gj56VljhcorZYPh9sxmOY7kHTXflyoDiuEslgiKVc9JK+87VlmjdAeKVGbxlkZgVECF36wMx/wB0/SoxIiisdaZBlYQRQYentATaHeGu+FfQVJnk6b0qt4jQCrVv1mydBtjBaE7inPCMJlE79KKwOEFtQN6KukBSeQB26RypFoZmK4/aJvPAzDTUax5GNtZ+dJr6iNh91GXLBRrloNCkxrzymV/A0E6MDB1+tBs1Atm1mYAg7/jT/OBQ2AtBXU8povFWDNFGKi0179zqWHMfdRqpTJGs+3ONXFF0J8AVEOggCIA15nKfkayLQST702xlpmd8uwMkTziAY670BdsEMQRBJ2YQf8U92zVSDOzmCV7wDHTKxj0IFbBVRPhUCs1wct3puE+LKQfPYfgKdi8Z2k/qfpS9BaDe/NCcdt95YcdBP+0zpVBvmY5/lQl3iyrMydOWu/XypWzR0zOm3G0dfIeUVWVBHl161bdAd1CnRifOBvrFavGdnLa4QXA6s0SSQIjlAOgHIn0PkWckjJGat3SgDAqZJAEydI3HQ0xwnGyQwaM3IwOuoB5b8tqU3XTLAjODp0KwZHTeNt5oEDWak2iisf2eNXATDaTEVdhu0JWZjxfaiSPwrPo4BOmh6a7VPJJiDrsAN/ypKT0G3dmhu8QtXAEJ0/mO4Pr99A4JEYsrbg6EHf0nSl+KwRGq6r9flpPtQqMJ1J/81lFxM5p7o0FvBhjltsCw5EgE+levYR0jMIO0c/8AxWfvPECNfyoq3jWnRmjkGM/j6UVyXkFwfg6augqq7jBEeVL7vEswgUvv3Y9aYQXJhnLHcmdz0Gn3UcLK86ofEGqxeJrADVRZmrbjRQdm7E6TI08jI189J+dWX3+0BA6D/NFM1Bi4EHxDY18zKKrw+KIXT5etAYjFZdT9PP1o8jUKcRmS4TOsmfOevqKk8EZo06+fQ1TdvBmkbHrvUBoSDt+oNK/lFI9UxzgVbLmXpB9uX3Vbf4hrtoBMN58tPn7UFwTibWHJADKwhlOzD8D51VxBg5JGx+k0JTAou9kf35y2UasTAVd5JiJ6/ShdVXckNofn125mhbtuPEDrPIzyOs+v319w6spB0jSRyIHIxRTsDjQ04Wq51kyNZ021289K0mKu2wiWnf8AhkyFEa76+gOsdayS2zpl1PMDl+tKuZ2cLJPhMj9e1FwsKnWizjODa1cDQMpEr6xsf80vS83IxIiOUdI9hV+KzuZZifU0PGZo9J9uWlbjXZuVl1t4UnTXp09KjaukTMhcwkrofKNxvrX17k/cIqo3ip18v1rtSGscWGfUpdUjo6n6kSau/gn/AI+GOkDvLJzT5ldCPcUnLEQwMHz/ADFfG4m4JkKY6fnTWLRLiOGAJNucp5PGbyJj7qFs2yRr9f1pRDcRQgkq0noSs+up+gFVHiMHwoo56yx25sTP3UNBNXaiJqjE3Zr7XqCCAXbtet3q9XqIAtWLB7mkArI/umAAPJT8q+piJ0r1eoIJPD2okzpSvimIEQP1+hXq9WMKM2tFlpX0+6vV6jEJBLsRRF15kRtvB6eter1ZGZBbKmJnT3qaKq6cv8f5r1eo9A7Vg7XYEirsHek16vUbFCL/AMJAOsf+aBOVBLfIV6vVpGRQ2LYmRoFIP5VO9iiRsP1M18r1KEpa+Y8tv15VKxcQbgzO4MaR98869XqwC9rtkn4G2/m5/wDia9cW0QcqEHkc08uYr1erBP/Z",
//     body: "avengers infinity wars"
//     }
// ]

// function seedDB(){
//     movie.remove({}, function(err){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Database Cleared");
//             data.forEach(function(seed){
//                 movie.create(seed, function(err, movie){
//                     if(err){
//                         console.log(err);
//                     }else{
//                         console.log("created movie")
//                         //create a comment
// 					comment.create({
// 						text: "This place is great nut i wish there was internet",
// 						author: "homer"				
// 					}, function(err, comment){
// 						if(err){
// 							console.log(err);
// 						}else{
// 							movie.comments.push(comment);
//                             movie.save();
//                             console.log("comment created")
// 						}
// 					})
//                     }
//                 })
//             })
//         }
//     })
// }

// module.exports = seedDB;