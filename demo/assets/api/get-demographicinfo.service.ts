
// call this service after calling create appraisal service. 
// It takes one query param appraisalId (the id we get when we call create appraisal json in return).

//example: http://10.15.66.88:5100/YTL/GetDemographicInfo?appraisalId=11



export const GET_DEMOGRAPHIC_INFO: any = {
    "completeDt": "/Date(1530566560000-0500)/",
    "commitDt": null,
    "progress": 0,
    "id": 12,
    "appraisalId": 11,
    "completedBy": "Trisha.Kelly@mdcps.ms.gov",
    "youthName": "Joe Jonas",
    "age": 15,
    "dob": "1995-09-30",
    "race": "BLACK",
    "gender": "M",
    "phone": "6014454321",
    "email": "none@noemail.com",
    "custodyStatus": false,
    "dischargeDate": "2016-09-30",
    "isLGBTQ": "No",
    "isLesbian": false,
    "isGay": true,
    "isBisexual": false,
    "isTransgender": false,
    "isQuestioning": true,
    "isOther": false,
    "lgbtqOtherType": "",
    "corName": "Quitman",   
    "cosName": "Yalobusha",
    "hasHealthInsurance": false,
    "hasMedicaid": true,
    "hasLanguageBarriers": false,
    "languageBarriersText": "",
    "permPlan": "Reunif W/aPrim Caretkr Parents",
    "corWorker":    {
       "email": "Eunice.Marsaw@mdcps.ms.gov",
       "firstName": "Eunice",
       "id": 1,
       "isTransitionNav": false,
       "lastName": "Marsaw",
       "macwisId": "000000019",
       "phone": "(601) 443-1046",
       "workerName": "Eunice Marsaw"
    },
    "navigator":    {
       "email": "Eunice.Marsaw@mdcps.ms.gov",
       "firstName": "Eunice",
       "id": 1,
       "isTransitionNav": false,
       "lastName": "Marsaw",
       "macwisId": "000000019",
       "phone": "(601) 443-1046",
       "workerName": "Eunice Marsaw"
    },
    "addressList": [
        {
            "id":	"integer($int32)",
            "line1": "string",
            "line2": "string",
            "city":	"string",
            "state": "string",
            "zip":	"string",
            "county": "string"
        }
    ],
    "concerns": [],   
    "goals": []
 }