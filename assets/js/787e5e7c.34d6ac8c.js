(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8070],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(a),p=r,g=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9961:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l={title:"Ingesting files from S3",sidebar_label:"Ingesting files from S3",slug:"/metadata-ingestion/s3-ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/s3-ingestion.md"},o={unversionedId:"metadata-ingestion/s3-ingestion",id:"metadata-ingestion/s3-ingestion",isDocsHomePage:!1,title:"Ingesting files from S3",description:"To produce schema metadata for files on S3, we recommend using AWS Glue's built-in schema inference capabilities, as we already have a Glue ingestion integration. Note: if you have nested data, perhaps in JSON format, then we recommend you hold tight since Glue's nested schema capabilities are fairly limited.",source:"@site/genDocs/metadata-ingestion/s3-ingestion.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion/s3-ingestion",permalink:"/docs/metadata-ingestion/s3-ingestion",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/s3-ingestion.md",version:"current",sidebar_label:"Ingesting files from S3",frontMatter:{title:"Ingesting files from S3",sidebar_label:"Ingesting files from S3",slug:"/metadata-ingestion/s3-ingestion",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/s3-ingestion.md"},sidebar:"overviewSidebar",previous:{title:"Adding a Metadata Ingestion Source",permalink:"/docs/metadata-ingestion/adding-source"},next:{title:"OIDC Authentication in React",permalink:"/docs/how/configure-oidc-react"}},s=[{value:"Setting up Glue on AWS",id:"setting-up-glue-on-aws",children:[{value:"Test data",id:"test-data",children:[]},{value:"Creating a crawler",id:"creating-a-crawler",children:[]}]},{value:"Adding a Glue ingestion source",id:"adding-a-glue-ingestion-source",children:[]}],d={toc:s};function u(e){var t=e.components,l=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To produce schema metadata for files on S3, we recommend using AWS Glue's built-in schema inference capabilities, as we already have a ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#aws-glue-glue"},"Glue ingestion integration"),". Note: if you have nested data, perhaps in JSON format, then we recommend you hold tight since Glue's nested schema capabilities are fairly limited."),(0,i.kt)("p",null,"To ingest S3 files with Glue, there are two main steps: (1) setting up Glue to scan your S3 directories, and (2) adding the Glue ingestion configurations on DataHub."),(0,i.kt)("h2",{id:"setting-up-glue-on-aws"},"Setting up Glue on AWS"),(0,i.kt)("p",null,"Glue scans files and infers their schemas using ",(0,i.kt)("strong",{parentName:"p"},"crawlers"),". Support exists for a wide variety of file formats (see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/add-classifier.html"},"here")," for the official AWS list). Glue is also capable of crawling databases such as MySQL, PostgreSQL, and Redshift, though DataHub already has ingestion frameworks for these."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Classifier type"),(0,i.kt)("th",{parentName:"tr",align:null},"Classification string"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Apache Avro"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"avro")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the schema at the beginning of the file to determine format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Apache ORC"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"orc")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the file metadata to determine format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Apache Parquet"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"parquet")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the schema at the end of the file to determine format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"JSON"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"json")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the beginning of the file to determine format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Binary JSON"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bson")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the beginning of the file to determine format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"XML"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"xml")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the beginning of the file to determine format. AWS Glue determines the table                                                schema based on XML tags in the document.                                                                                                                                                   For information about creating a custom XML classifier to specify rows in the document,                                                                                                      see ",(0,i.kt)("a",{parentName:"td",href:"https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-xml"},"Writing XML Custom Classifiers"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Amazon Ion"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ion")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the beginning of the file to determine format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Combined Apache log"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"combined_apache")),(0,i.kt)("td",{parentName:"tr",align:null},"Determines log formats through a grok pattern.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Apache log"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"apache")),(0,i.kt)("td",{parentName:"tr",align:null},"Determines log formats through a grok pattern.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linux kernel log"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"linux_kernel")),(0,i.kt)("td",{parentName:"tr",align:null},"Determines log formats through a grok pattern.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microsoft log"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"microsoft_log")),(0,i.kt)("td",{parentName:"tr",align:null},"Determines log formats through a grok pattern.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ruby log"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ruby_logger")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the beginning of the file to determine format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Squid 3.x log"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"squid")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the beginning of the file to determine format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Redis monitor log"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"redismonlog")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the beginning of the file to determine format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Redis log"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"redislog")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the beginning of the file to determine format.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CSV"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"csv")),(0,i.kt)("td",{parentName:"tr",align:null},"Checks for the following delimiters: comma (,), pipe (","|","), tab (\\t), semicolon                                                (;), and Ctrl-A (\\u0001). Ctrl-A is the Unicode control character for ",(0,i.kt)("inlineCode",{parentName:"td"},"Start Of                                                   Heading"),".")))),(0,i.kt)("h3",{id:"test-data"},"Test data"),(0,i.kt)("p",null,"If you'd like to test Glue out on a smaller dataset before connecting it to any production records, AWS has public S3 buckets named ",(0,i.kt)("inlineCode",{parentName:"p"},"crawler-public-{REGION}")," (for instance, ",(0,i.kt)("inlineCode",{parentName:"p"},"crawler-public-us-west-2"),"). These contain an example dataset on 2016 plane flights in CSV, Avro, ORC, and Parquet formats. In the following example, we'll demonstrate how to crawl the Avro files and ingest them into DataHub."),(0,i.kt)("h3",{id:"creating-a-crawler"},"Creating a crawler"),(0,i.kt)("p",null,"To configure Glue, first navigate to the Glue console at ",(0,i.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/glue/home"},"https://console.aws.amazon.com/glue/home"),"."),(0,i.kt)("p",null,"Before starting, consider the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The source files should all be of the same shape (i.e. they have the same columns). Glue's schema inference may have unexpected behavior if files with different schemas are scanned together."),(0,i.kt)("li",{parentName:"ol"},"The source files should not contain deeply nested fields (which is possible with JSON files). Glue will only capture the top-level keys in such files."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://aws.amazon.com/glue/pricing/"},"Glue's pricing model"),". Note that each crawler is charged based on how long and how many of AWS's Data Processing Units (DPUs) run. If the source dataset is relatively large, there may be high costs associated, so we recommend you run on a smaller subset first.")),(0,i.kt)("p",null,"Now let's get started!"),(0,i.kt)("p",null,'Under "Data Catalog" > "Crawlers", click "Add Crawler" to open up the creation dialog.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First, set the name and description of your crawler so you'll be able to come back to it later. Note that once you've created a crawler, you can still edit it later, so none of the settings here have to be final except for the crawler name."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"1_crawler-info",src:a(9345).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next, set the type of data you'd like to crawl over. In this case, we'll traverse all folders in an existing data store (S3). Table's already in Glue's data catalog may also be reused."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"2_crawler-type",src:a(9337).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, we'll specify the data store source. In this case, we use the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"s3://crawler-public-us-west-2/flight/avro/"),"."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"3_data-store",src:a(4062).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If there's another data source, we also have the option to add it here. Adding another source may be useful if there's another similar data store you want to crawl at the same time."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"4_data-store-2",src:a(5160).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To give your crawler permissions to read your data source, select or create an IAM role."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"5_iam",src:a(2114).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Next, set how you want your crawler to be run. In this case, we\'ll use "Run on demand", which means that we trigger the crawler ourselves.'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"6_schedule",src:a(528).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, we'll configure how you want the crawler to output data. Glue outputs metadata to 'databases' where each detected group of data is mapped to a 'table.' If you'd like to distinguish between different crawlers/data sources, you can select a prefix to be added to the database name."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"7_output",src:a(4937).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Next, review your crawler settings and save the crawler."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"8_review",src:a(1512).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, let's trigger the crawler run as we previously selected 'On demand'. From the list of crawlers, click the one we just created, and hit 'Run crawler'. (Otherwise, if you selected a scheduled frequency, just wait for your crawler to run automatically)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"9_run",src:a(1781).Z})))),(0,i.kt)("p",null,"Once complete, you should see an ",(0,i.kt)("inlineCode",{parentName:"p"},"avro")," table in the data catalog along with the following metadata:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"10_outputs",src:a(7113).Z})),(0,i.kt)("h2",{id:"adding-a-glue-ingestion-source"},"Adding a Glue ingestion source"),(0,i.kt)("p",null,"Having crawled our data in Glue, the next step is to ingest our Glue metadata into DataHub."),(0,i.kt)("p",null,"To add a Glue ingestion source, first make sure you have DataHub running already and have already installed the CLI (see ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"here")," for installation instructions)."),(0,i.kt)("p",null,"Next, create your YML config file (see example config file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/examples/recipes/glue_to_datahub.yml"},"here"),") and run ",(0,i.kt)("inlineCode",{parentName:"p"},"datahub ingest -c CONFIG_FILE.yml")," to get your metadata!"),(0,i.kt)("p",null,"For the above example with the Avro flights data, one might use the following config for the source:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: glue\n  config:\n    aws_region: "us-west-2"\n    env: "PROD"\n\n    # Filtering patterns for databases and tables to scan\n    database_pattern:\n      allow:\n        - "flights-database"\n    table_pattern:\n        allow:\n        - "avro"\n\n    # Credentials. If not specified here, these are picked up according to boto3 rules.\n    # (see https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html)\n    aws_access_key_id: # Optional.\n    aws_secret_access_key: # Optional.\n    aws_session_token: # Optional.\n    aws_role: # Optional (Role chaining supported by using a sorted list).\n')),(0,i.kt)("p",null,"This will extract the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"List of tables"),(0,i.kt)("li",{parentName:"ul"},"Column types associated with each table"),(0,i.kt)("li",{parentName:"ul"},"Table metadata, such as owner, description and parameters")),(0,i.kt)("p",null,"After ingesting, you should be able to see your datasets on the DataHub frontend. For more details, check out the ",(0,i.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"full metadata ingestion docs"),"."))}u.isMDXComponent=!0},7113:function(e,t,a){"use strict";t.Z=a.p+"assets/images/10_outputs-4560cbd31b7a6fb898033fd48f2e67fd.png"},9345:function(e,t,a){"use strict";t.Z=a.p+"assets/images/1_crawler-info-b262123d5f823eed351d05d62ff71d23.png"},9337:function(e,t,a){"use strict";t.Z=a.p+"assets/images/2_crawler-type-789c2b686e15c4b7a10d0ab1a018be39.png"},4062:function(e,t,a){"use strict";t.Z=a.p+"assets/images/3_data-store-e18324d3cefae235947684f6a6b9c56d.png"},5160:function(e,t,a){"use strict";t.Z=a.p+"assets/images/4_data-store-2-7c50fc61bdbff108d242873f1dd17501.png"},2114:function(e,t,a){"use strict";t.Z=a.p+"assets/images/5_iam-081606d28022c79b7974890322d12f43.png"},528:function(e,t,a){"use strict";t.Z=a.p+"assets/images/6_schedule-ddc3b12a1200a9a9823d958f2a04cba6.png"},4937:function(e,t,a){"use strict";t.Z=a.p+"assets/images/7_output-d9ae9758f523a1b3511c9c79c078f108.png"},1512:function(e,t,a){"use strict";t.Z=a.p+"assets/images/8_review-47c8843bdeb422b54d277bf13f3d4a96.png"},1781:function(e,t,a){"use strict";t.Z=a.p+"assets/images/9_run-13d0d8248962ea8b3ee225da6553a1a1.png"}}]);