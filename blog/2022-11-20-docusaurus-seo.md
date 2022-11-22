---
slug: docusaurus-seo
title: Github pages + Docusaurus blog seo 탐방기
description: Github pages + Docusaurus blog seo 탐방기
authors: dev-owner
keywords: [docusaurus, seo, github pages]
tags: [docusaurus, seo, github pages]
---

# 내 글이 검색되지 않는다.

22년 4Q, 블로그를 쓰기 위해 마음을 다잡고 오랜시간 여러 플랫폼을 돌아다니며 고민하다가 `Docusaurus`를 선택하였습니다. 열심히 블로그를 썼는데, 제 글이 검색엔진에 인덱싱이 되지 않아 검색 자체가 아예 되지 않는걸 발견하고 SEO 작업을 따로 해야겠다고 마음 먹었습니다.


# 검색엔진

한국에서는 대표적인 검색엔진으로 Google, Naver가 있죠. 두개의 사이트에 대해 진행하고자 했습니다.

Google의 경우, https://search.google.com/search-console/about

Naver의 경우, https://searchadvisor.naver.com/ 에서 웹마스터 도구

1. robots.txt 작성
2. 소유권 확인
3. 사이트맵 추가

docusaurus에서는 기본 classic으로 진행하면 자동으로 사이트맵이 만들어집니다. https://docusaurus.io/docs/next/seo#sitemap-file

robots.txt는 `static/` 경로 하위에 생성을 따로 해주어야 합니다.

naver는 host 기반으로 소유권을 확인하는데, github pages로 호스팅하면 repository name이 무조건 뒤에 붙어서 할수가 없었습니다. 방법 아시는 분 계시면 제보 부탁 드립니다..

google은 URL 접두어 기반 속성유형도 지원하여 소유권 확인이 되었습니다.

작성중