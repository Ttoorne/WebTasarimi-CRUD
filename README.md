# WebTasarimi-CRUD
Bu proje, Web Tasarımı dersi için geliştirilen bir CRUD (Create, Read, Update, Delete) uygulamasını içermektedir. Bu uygulama, gerçek hayatta ticari bir işletmenin ihtiyaçları göz önüne alınarak, film ekleme, listeleme, düzenleme ve silme işlemlerini gerçekleştirmektedir. (Netflix web sitesi temel alınmıştır)

## Proje Açıklaması:
Bu web uygulaması kullanıcıların filmleri yönetmesine olanak tanır.
Temel özellikleri aşağıdaki gibidir:

Filmleri ekleyebilme
Mevcut filmleri listeleyebilme
Film bilgilerini güncelleyebilme
Filmleri silebilme

## Gereksinimler:

Bu projeyi çalıştırmak için aşağıdaki gereksinimlerin karşılanması gerekmektedir:

- Web tarayıcısı (Chrome, Firefox, vb.)
- İnternet bağlantısı

## Kurulum:

Projeyi yerel makinenize kurmak için aşağıdaki adımları izleyebilirsiniz:

1. Bu GitHub reposunu klonlayın veya veya zip formatında indirin:
   ```
   git clone https://github.com/Ttoorne/WebTasarimi-CRUD.git
   ```

2. İndirilen dizine gidin.

3. Hepsini terminale yazın:
1) Terminale girin ve node-modüllerini indirmek için yazın:
```
npm i
```

2) Json-server'ı çalıştırın (8000 portunda zorunlu):

```
json-server -w db.json -p 8000
```

3) İndirilen dosyaları bir web sunucusunda çalıştırın.
```
npm start
```

## Kullanım:
Uygulamayı kullanmak için aşağıdaki adımları izleyebilirsiniz:

1. Web tarayıcısını açın.

2. Adres çubuğuna `http://localhost:3000` yazın.

3. Uygulama ana sayfası açılacak. Burada ürünleri listeleyebilir, yeni ürün ekleyebilir, mevcut ürünleri düzenleyebilir ve silebilirsiniz.


