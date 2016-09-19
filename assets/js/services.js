/* Summary:         Service definitions
*
* Descriptions:     This program provides the Service functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-19
*/

project.service('projectApp1', function() {
    
    // Get client list from API
    this.clientelle = [
                        { 
                            id: 1,
                            img: 'user1',
                            name: 'Prianka Chopra Enterprises',
                            phone1: '(305) 555-1234',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
                        { 
                            id: 2,
                            img: 'user2',
                            name: 'Amit B Cakes, LLC',
                            phone1: '(305) 555-2345',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
                        { 
                            id: 3,
                            img: 'user3',
                            name: 'Joke Factory Group',
                            phone1: '(305) 555-3456',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
                        { 
                            id: 4,
                            img: 'user4',
                            name: 'O Sha-reef Scuba Diving',
                            phone1: '(305) 555-4567',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
                        {
                            id: 5,
                            img: 'user5',
                            name: 'PURE Hair Salon',
                            phone1: '(305) 555-5555',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
{ 
                            id: 6,
                            img: 'user6',
                            name: 'SGS-1 Rick Hunter Consulting',
                            phone1: '(305) 555-5678',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
                        { 
                            id: 7,
                            img: 'user7',
                            name: 'Make Up By Judy, LLC',
                            phone1: '(305) 555-6789',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
                        { 
                            id: 8,
                            img: 'user8',
                            name: 'Sudan Model Agency',
                            phone1: '(305) 555-7890',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
                        { 
                            id: 9,
                            img: 'user9',
                            name: 'Politico THink Tank SOlutions, LLC',
                            phone1: '(305) 555-0123',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },
                        {
                            id: 10,
                            img: 'user10',
                            name: 'G Clooney Restaurants Group',
                            phone1: '(305) 555-1237',
                            email: 'email@xyx.miami',
                            city: 'Miami-Brickell',
                            state: 'FL',
                            zip: '33031',
                        },        
                   ]
// Get messages from Client API
this.messages = [
                        { 
                            id: 1,
                            client: 1,
                            from: 'Margret Thatcher',
                            company: 'Senate House Committee',
                            phone: '(714) 555-1234',
                            email: 'margret.thatcher@fedbiz.gov',
                            message: 'Please call back reguarding the proposal deadline.',
                            dateCreated: '2016-08-19',
                            dateRead: '2016-09-19',
                        },
       
                   ]                   
    
});
