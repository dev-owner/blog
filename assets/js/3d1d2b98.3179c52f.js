"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[5684],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=n.createContext({}),p=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(m.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},f=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(t),g=r,d=f["".concat(m,".").concat(g)]||f[g]||s[g]||o;return t?n.createElement(d,i(i({ref:a},c),{},{components:t})):n.createElement(d,i({ref:a},c))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var m in a)hasOwnProperty.call(a,m)&&(l[m]=a[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8968:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(7462),r=(t(7294),t(3905));const o={slug:"aws-mwaa-configuration-xcom-backend-issue",title:"AWS MWAA(Airflow) airflow.cfg core.xcom_backend \uc124\uc815 \uc774\uc288",description:"AWS MWAA(Airflow) airflow.cfg core.xcom_backend \uc124\uc815 \uc774\uc288",authors:"dev-owner",keywords:["aws","mwaa","airflow","airflow.cfg","xcom","xcom_backend"],tags:["aws","mwaa","airflow"]},i=void 0,l={permalink:"/aws-mwaa-configuration-xcom-backend-issue",source:"@site/blog/2022-11-25-mwaa-xcom_backend-config.md",title:"AWS MWAA(Airflow) airflow.cfg core.xcom_backend \uc124\uc815 \uc774\uc288",description:"AWS MWAA(Airflow) airflow.cfg core.xcom_backend \uc124\uc815 \uc774\uc288",date:"2022-11-25T00:00:00.000Z",formattedDate:"2022\ub144 11\uc6d4 25\uc77c",tags:[{label:"aws",permalink:"/tags/aws"},{label:"mwaa",permalink:"/tags/mwaa"},{label:"airflow",permalink:"/tags/airflow"}],readingTime:5.115,hasTruncateMarker:!1,authors:[{name:"Jaewoo Sung",title:"Maintainer of blog",url:"https://github.com/dev-owner",key:"dev-owner"}],frontMatter:{slug:"aws-mwaa-configuration-xcom-backend-issue",title:"AWS MWAA(Airflow) airflow.cfg core.xcom_backend \uc124\uc815 \uc774\uc288",description:"AWS MWAA(Airflow) airflow.cfg core.xcom_backend \uc124\uc815 \uc774\uc288",authors:"dev-owner",keywords:["aws","mwaa","airflow","airflow.cfg","xcom","xcom_backend"],tags:["aws","mwaa","airflow"]},nextItem:{title:"parallel-build?",permalink:"/2022/11/23/docker-build-way"}},m={authorsImageUrls:[void 0]},p=[{value:"\ubb38\uc81c",id:"\ubb38\uc81c",level:2},{value:"\ud574\uacb0",id:"\ud574\uacb0",level:2},{value:"1. airflow.cfg \uc635\uc158 \ubcc0\uacbd \uc2e4\ud328\uc5d0 \ub300\ud55c \ub514\ubc84\uae45",id:"1-airflowcfg-\uc635\uc158-\ubcc0\uacbd-\uc2e4\ud328\uc5d0-\ub300\ud55c-\ub514\ubc84\uae45",level:3},{value:"2. MWAA Managed Node \uc811\uadfc \ubc29\ubc95\uc774 \uc788\uc744\uae4c?",id:"2-mwaa-managed-node-\uc811\uadfc-\ubc29\ubc95\uc774-\uc788\uc744\uae4c",level:3},{value:"3. Airflow Configuration \ubcc0\uacbd \ubc29\ubc95",id:"3-airflow-configuration-\ubcc0\uacbd-\ubc29\ubc95",level:3},{value:"4. AWS-MWAA-LOCAL-RUNNER",id:"4-aws-mwaa-local-runner",level:3},{value:"5. \ud604\uc7ac MWAA\uc5d0 \uc801\uc6a9\ub41c airflow.cfg \uac12 \ubc0f \ud658\uacbd\ubcc0\uc218 \ud655\uc778 \ubc29\ubc95",id:"5-\ud604\uc7ac-mwaa\uc5d0-\uc801\uc6a9\ub41c-airflowcfg-\uac12-\ubc0f-\ud658\uacbd\ubcc0\uc218-\ud655\uc778-\ubc29\ubc95",level:3},{value:"Summary",id:"summary",level:2},{value:"References",id:"references",level:2}],c={toc:p};function s(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ubb38\uc81c"},"\ubb38\uc81c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AWS MWAA ",(0,r.kt)("inlineCode",{parentName:"li"},"airflow.cfg"),"\uc5d0 custom xcom backend\ub97c \ub4f1\ub85d\ud558\uae30 \uc704\ud574 ",(0,r.kt)("inlineCode",{parentName:"li"},"core.xcom_backend:include.s3_xcom_backend.S3XComBackend")," \uc801\uc6a9 \uc2dc \ud074\ub7ec\uc2a4\ud130 \uc5c5\ub370\uc774\ud2b8 \uc2e4\ud328")),(0,r.kt)("h2",{id:"\ud574\uacb0"},"\ud574\uacb0"),(0,r.kt)("h3",{id:"1-airflowcfg-\uc635\uc158-\ubcc0\uacbd-\uc2e4\ud328\uc5d0-\ub300\ud55c-\ub514\ubc84\uae45"},"1. airflow.cfg \uc635\uc158 \ubcc0\uacbd \uc2e4\ud328\uc5d0 \ub300\ud55c \ub514\ubc84\uae45"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uc774\uc288 \uc7ac\ud604"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"local\uc5d0 mwaa \ud658\uacbd \uad6c\ucd95 \ud6c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"core.xcom_backend:include.s3_xcom_backend.S3XComBackend")," \uc801\uc6a9\uc2dc \ud074\ub7ec\uc2a4\ud130 \uc0c1\ud0dc \ud655\uc778"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(6105).Z,width:"1694",height:"196"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AirflowConfigException: The object could not be loaded")," \ud655\uc778")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MWAA\uc5d0\uc11c\ub294 Config \uc2e4\ud328\ub85c \uc778\ud55c retry \ub4f1\uc73c\ub85c API Timeout\uc774 \ub0a0 \ub54c \uae4c\uc9c0 \uc624\ub79c \uc2dc\uac04 Cluster \uc0c1\ud0dc\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"Updating"),"\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uae30\ubcf8 \uac12 \uc801\uc6a9\uc2dc \ub0b4\uc6a9 \ud655\uc778"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'"core.xcom_backend": "airflow.models.xcom.BaseXCom"')),(0,r.kt)("p",{parentName:"li"},"\u2192 \uc131\uacf5"),(0,r.kt)("p",{parentName:"li"},"\u2192 Value\uac12\uc5d0 \ucc38\uc870\ud560 \uc218 \uc5c6\ub294 \uac12\uc774 \ub4e4\uc5b4\uac00\uba74 \uc2e4\ud328\ud558\ub294 \uac83\uc744 \uc720\ucd94\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"dags/")," \ud3f4\ub354\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"s3_xcom_backend.py")," \ud30c\uc77c \uc0dd\uc131 \ud6c4 configuration \uc801\uc6a9"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"core.xcom_backend": "s3_xcom_backend.S3XComBackend"'))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(4752).Z,width:"1180",height:"172"})),(0,r.kt)("p",{parentName:"li"},"  \u2192 ",(0,r.kt)("strong",{parentName:"p"},"\uc131\uacf5")))),(0,r.kt)("h3",{id:"2-mwaa-managed-node-\uc811\uadfc-\ubc29\ubc95\uc774-\uc788\uc744\uae4c"},"2. MWAA Managed Node \uc811\uadfc \ubc29\ubc95\uc774 \uc788\uc744\uae4c?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Managed service\uc774\uace0 \ub0b4\ubd80\uc801\uc73c\ub85c ",(0,r.kt)("inlineCode",{parentName:"p"},"Amazon ECS on Fargate"),"\ub85c \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 airflow\uac00 \uc124\uce58\ub41c host\uc758 shell\ub85c \uc811\uadfc\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc740 \ud604\uc7ac \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MWAA Architecture"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(3493).Z,width:"970",height:"559"})))),(0,r.kt)("h3",{id:"3-airflow-configuration-\ubcc0\uacbd-\ubc29\ubc95"},"3. Airflow Configuration \ubcc0\uacbd \ubc29\ubc95"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\ud604\uc7ac MWAA\uc5d0\uc11c\ub294 airflow.cfg\ub97c ",(0,r.kt)("strong",{parentName:"p"},"\uc9c1\uc811\uc801"),"\uc73c\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uac00\ub2a5\ud55c \ubc29\ubc95\uc740 \uc544\ub798 3\uac00\uc9c0 \uc785\ub2c8\ub2e4."),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"CFN"),"\uc774\ub098 ",(0,r.kt)("inlineCode",{parentName:"p"},"CDK"),"\ub4f1 ",(0,r.kt)("inlineCode",{parentName:"p"},"IaC"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0dd\uc131\ud558\uac70\ub098 \uc5c5\ub370\uc774\ud2b8 \ud560 \ub54c \uc635\uc158 \ubc18\uc601"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AirflowConfigurationOptions")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"WEB UI\ub97c \ud1b5\ud55c \ubc29\ubc95"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(8440).Z,width:"785",height:"256"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"AWS-CLI\ub97c \ud1b5\ud55c \ubc29\ubc95"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/bash\n# update configuration\naws mwaa update-environment \\\n--name xcom_backend_test \\\n--airflow-configuration-options """{\n  \\"scheduler.dag_dir_list_interval\\": \\"5\\",\n  \\"scheduler.min_file_process_interval\\": \\"5\\",\n  \\"webserver.expose_config\\": \\"True\\"\n  }"""\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n# check configuration\naws mwaa get-environment \\\n--name xcom_backend_test | \\\njq -r '.Environment.AirflowConfigurationOptions'\n")))))),(0,r.kt)("h3",{id:"4-aws-mwaa-local-runner"},"4. AWS-MWAA-LOCAL-RUNNER"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MWAA \ud658\uacbd\uc5d0 \uc9c1\uc811\uc801\uc778 \uc811\uadfc\uc740 \uc5b4\ub835\uc9c0\ub9cc, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/aws/aws-mwaa-local-runner"},"aws-mwaa-local-runner"),"\ub97c \ud1b5\ud574 local\uc5d0 MWAA\ub97c mocking\ud558\uc5ec \ud14c\uc2a4\ud2b8\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"1. /aws-mwaa-local-runner/docker/config/airflow.cfg \ubcc0\uacbd\n2. ./mwaa-local-env build-image\n3. ./mwaa-local-env start\n4. airflow.cfg \ubc18\uc601 \ud655\uc778\n")))),(0,r.kt)("h3",{id:"5-\ud604\uc7ac-mwaa\uc5d0-\uc801\uc6a9\ub41c-airflowcfg-\uac12-\ubc0f-\ud658\uacbd\ubcc0\uc218-\ud655\uc778-\ubc29\ubc95"},"5. \ud604\uc7ac MWAA\uc5d0 \uc801\uc6a9\ub41c airflow.cfg \uac12 \ubc0f \ud658\uacbd\ubcc0\uc218 \ud655\uc778 \ubc29\ubc95"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc5ec\uae30\uc5d0\ub294 \uba87\uac00\uc9c0 \ubc29\ubc95\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ud658\uacbd\ubcc0\uc218\uc5d0\uc11c \ud655\uc778"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from __future__ import annotations\n\nimport logging\nimport os\nfrom datetime import datetime, timedelta\n\nfrom airflow import DAG\nfrom airflow.operators.python import PythonOperator\n\nlogger = logging.getLogger(__name__)\n\nwith DAG(\n'get_env_var',\ndefault_args={\n  'depends_on_past': False,\n  'retries': 1,\n  'retry_delay': timedelta(minutes=5)\n  },\n  description='check mwaa configuration',\n  start_date=datetime(2022, 11, 26),\n  catchup=False\n  ) as dag:\n  def print_env_vars():\n  keys = dict(os.environ)\n  for k, v in keys.items():\n  print(f'{k}: {v}')\n\nget_env_vars_operator = PythonOperator(\ntask_id='get_env_vars_task',\npython_callable=print_env_vars\n)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"airflow.cfg \ud30c\uc77c\uc5d0\uc11c \ud655\uc778"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from __future__ import annotations\n\nimport logging\nimport os\nfrom datetime import datetime, timedelta\n\nfrom airflow import DAG\nfrom airflow.operators.python import PythonOperator\n\nlogger = logging.getLogger(__name__)\n\nwith DAG(\n'get_airflow_cfg_file',\ndefault_args={\n  'depends_on_past': False,\n  'retries': 1,\n  'retry_delay': timedelta(minutes=5)\n  },\n  description='check mwaa configuration',\n  start_date=datetime(2022, 11, 26),\n  catchup=False\n  ) as dag:\n  def print_airflow_cfg():\n  with open(f\"{os.getenv('AIRFLOW_HOME')}/airflow.cfg\", 'r') as airflow_cfg:\n  file_contents = airflow_cfg.read()\n  print(f'\\n{file_contents}')\n\nget_airflow_cfg_operator = PythonOperator(\ntask_id='get_airflow_cfg_task',\npython_callable=print_airflow_cfg\n)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"airflow.configuration.conf \ud655\uc778"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from __future__ import annotations\n\nimport logging\nfrom datetime import datetime, timedelta\n\nfrom airflow import DAG\nfrom airflow.configuration import conf\nfrom airflow.operators.python import PythonOperator\n\nlogger = logging.getLogger(__name__)\n\nwith DAG(\n'get_airflow_cfg',\ndefault_args={\n  'depends_on_past': False,\n  'retries': 1,\n  'retry_delay': timedelta(minutes=5)\n  },\n  description='check mwaa configuration',\n  start_date=datetime(2022, 11, 26),\n  catchup=False\n  ) as dag:\n  def get_conf_vars():\n  logging.info(\n  f\"AIRFLOW__CORE__XCOM_BACKEND: {conf.get(section='CORE', key='XCOM_BACKEND')}\"\n  )\n\nget_conf_vars_operator = PythonOperator(\ntask_id='get_conf_vars_task',\npython_callable=get_conf_vars\n)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"MWAA Web UI\uc5d0\uc11c \ud655\uc778"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\uc9c4\ud589 \uacfc\uc815 \uc694\uc57d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"webserver.expose_config": "True\u201d \uac12\uc744 \uba3c\uc800 \uc124\uc815\ud569\ub2c8\ub2e4.'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(4480).Z,width:"1202",height:"258"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MWAA Web UI \u2192 Admin \u2192 Configuration\uc5d0 \ub4e4\uc5b4\uac11\ub2c8\ub2e4."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(1819).Z,width:"612",height:"191"})))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"UI\uc5d0\uc11c airflow.cfg\ub97c \ud655\uc778\ud569\ub2c8\ub2e4"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:t(2931).Z,width:"814",height:"841"})))),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MWAA\uc758 \uc138\ud305 \uad00\ub828 \ucc38\uace0\ud560\ub9cc\ud55c \uc790\ub8cc\uc785\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catalog.workshops.aws/amazon-mwaa-for-analytics/en-US"},"https://catalog.workshops.aws/amazon-mwaa-for-analytics/en-US")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://catalog.workshops.aws/aws-data-ingestion-pipeline/ko-KR"},"https://catalog.workshops.aws/aws-data-ingestion-pipeline/ko-KR")))),(0,r.kt)("li",{parentName:"ul"},"xcom_backend\uc758 \uac12\uc73c\ub85c ",(0,r.kt)("strong",{parentName:"li"},"\ucc38\uc870 \uac00\ub2a5\ud55c \uacbd\ub85c\uc5d0 \ud30c\uc77c\uc774 \uc788\uc5b4\uc57c\ub9cc")," \ud074\ub7ec\uc2a4\ud130 \uc815\uc0c1 \uc5c5\ub370\uc774\ud2b8 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"airflow.cfg \uac12\uc744 \ud638\uc2a4\ud2b8\uc5d0 \uc811\uadfc\ud558\uc5ec \uc9c1\uc811\uc801\uc73c\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc740 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"MWAA\ub294 Managed service\uc774\uae30 \ub54c\ubb38\uc5d0, \uc704\uc5d0 \uc124\uba85\ub4dc\ub9b0 \ubc29\ubc95\uc73c\ub85c \uc6b0\ud68c\ud558\uc5ec \uad6c\uc870 \ub4f1\uc744 \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud604\uc7ac MWAA\uc5d0\uc11c\ub294 \ub9cc\uc57d ",(0,r.kt)("inlineCode",{parentName:"li"},"\uc798\ubabb\ub41c \uc138\ud305\uac12"),"\uc73c\ub85c \ud074\ub7ec\uc2a4\ud130\ub97c \uc5c5\ub370\uc774\ud2b8 \uc2dc\ud0a4\uba74, \ub0b4\ubd80 \uc694\uc778\uc5d0 \uc758\ud574 \uc7a5\uc2dc\uac04 \ud074\ub7ec\uc2a4\ud130pending \uc0c1\ud0dc\uac00 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ub300\ube44\ud558\ub294 \ubc29\ubc95\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"aws-mwaa-local-runner\ub85c \ubbf8\ub9ac \uad6c\uc131\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"Network or Permission \ubb38\uc81c\uc77c \uc218\ub3c4 \uc788\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/awslabs/aws-support-tools/tree/master/MWAA"},"\ub9c1\ud06c\uc640")," \uac19\uc740 \ub3c4\uad6c\ub97c \uc774\uc6a9\ud558\ub294 \uac83\uc744 \ucd94\ucc9c \ub4dc\ub9bd\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"MWAA ",(0,r.kt)("inlineCode",{parentName:"li"},"23\ub144 \ub9c8\uc77c\uc2a4\ud1a4"),"\uc73c\ub85c \ud074\ub7ec\uc2a4\ud130 \uc5c5\ub370\uc774\ud2b8 \uad6c\uc131 \uc9c0\uc5f0 \uc774\uc288\ub294 \ud574\uacb0\ub420 \uc608\uc815\uc785\ub2c8\ub2e4.")))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://programmaticponderings.com/2020/12/29/amazon-managed-workflows-for-apache-airflow-configuration-understanding-amazon-mwaas-configuration-options/"},"https://programmaticponderings.com/2020/12/29/amazon-managed-workflows-for-apache-airflow-configuration-understanding-amazon-mwaas-configuration-options/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://airflow.apache.org/docs/apache-airflow/2.2.2/configurations-ref.html"},"https://airflow.apache.org/docs/apache-airflow/2.2.2/configurations-ref.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html#configuring-env-variables-airflow-ref"},"https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html#configuring-env-variables-airflow-ref")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.astronomer.io/learn/custom-xcom-backends"},"https://docs.astronomer.io/learn/custom-xcom-backends")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html"},"https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html"))))}s.isMDXComponent=!0},6105:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2022-11-25-1-8775c595247c03fc868e00aa6d815c72.png"},4752:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2022-11-25-2-89f346118e5042ce95bfe94d659b8a74.png"},3493:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2022-11-25-3-740e724b712faa372e893ee6739ce8f0.png"},8440:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2022-11-25-4-f9f3c3245e2350a176e30c1aee814c3d.png"},4480:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2022-11-25-5-16ea8ae76bdb06989a4d50b62c20f4e7.png"},1819:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2022-11-25-6-89770712a2c99618e9ce9f3c4a194e33.png"},2931:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/2022-11-25-7-3161d99455085f1132f80d2454156207.png"}}]);