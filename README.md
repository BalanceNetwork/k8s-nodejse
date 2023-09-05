## NOTLAR

### Adımlar;

---

1. önce base (temel) imaj oluşur veya hazır base imaj indirilir.
2. temel imaj üzerine ihtiyaç duyulan kütüphaneler ve paketler yüklenir.
    2.1. Yeni imaj Dockerfile ile hazırlanır.
    2.2. Yeni imaj komut istemiyle hazırlanır.

3. hazırlanan imaj üzerine çalışmasını istediğimiz kaynak kodlar yüklenir ve kaydedilir.
4. kaydedilen imaj çalışmaya hazır haldedir.

***


Temel imaj üzerinden yeni imaj oluşturma;

Dockerfile
```
# Belirlenen temel imaj....
FROM node:alpine

# Çalışma dizini....
WORKDIR /home

# İhtiyaç duyulan paketler....
RUN apk add git autoconf automake g++ make --no-cache

# Imaj çalıştırılmak istendiğinde yürütülecek komut....
CMD ["git", "--version"]
```

```
docker build . --tag bln:latest
```

