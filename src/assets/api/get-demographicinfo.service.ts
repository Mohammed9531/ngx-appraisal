
// call this service after calling create appraisal service. 
// It takes one query param appraisalId (the id we get when we call create appraisal json in return).

//example: http://10.15.66.88:5100/YTL/GetDemographicInfo?appraisalId=11



export const GET_DEMOGRAPHIC_INFO: any = {
    "completeDateString": "",
    "completedBy": null,
    "progress": 0,
    "id": 12,
    "appraisalId": 11,
    "completedById": 1,
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
    "cor":    {
       "countyCode": "370",
       "id": 45,
       "name": "Lamar"
    },
    "cos":    {
       "countyCode": "010",
       "id": 11,
       "name": "Adams"
    },
    "hasHealthInsurance": false,
    "hasMedicaid": true,
    "medicaidNumber": "",
    "hasLanguageBarriers": false,
    "languageBarriersText": "",
    "hasMentor": false,
    "wantsMentorInvolved": false,
    "permPlan": "Reunif W/aPrim Caretkr Parents",
    "corWorkerInfo":    {
       "email": "Eunice.Marsaw@mdcps.ms.gov",
       "firstName": "Eunice",
       "id": 1,
       "isTransitionNav": false,
       "lastName": "Marsaw",
       "macwisId": "000000019",
       "phone": "(601) 443-1046",
       "workerName": "Eunice Marsaw"
    },
    "navigatorInfo":    {
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
            "county":	{
                "id": "integer($int32)",
                "countyCode": "string",
                "name":	"string"
                
            }
        }
    ]
 }