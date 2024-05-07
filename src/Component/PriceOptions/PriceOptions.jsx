import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        
                {
                    "id": 1,
                    "option_name": "Starter Pack",
                    "price": "฿1,500",
                    "features": [
                        "Access to cardio equipment",
                        "Limited access to weightlifting area (3 days/week)",
                        "One fitness assessment session"
                    ]
                },
                {
                    "id": 2,
                    "option_name": "Standard Membership",
                    "price": "฿2,500",
                    "features": [
                        "Access to cardio equipment",
                        "Full access to weightlifting area",
                        "Unlimited fitness classes",
                        "Personal training session (once a month)"
                    ]
                },
                {
                    "id": 3,
                    "option_name": "Premium Membership",
                    "price": "฿4,000",
                    "features": [
                        "Access to all equipment and facilities",
                        "Unlimited fitness classes",
                        "Weekly personal training sessions",
                        "Nutritional consultation"
                    ]
                },
                {
                    "id": 4,
                    "option_name": "Family Pack",
                    "price": "฿5,500",
                    "features": [
                      "Access for 2 adults and 2 children",
                      "Access to all equipment and facilities",
                      "Family fitness classes",
                      "Monthly family fitness assessment"
                    ]
                  },
                  {
                    "id": 5,
                    "option_name": "Student Membership",
                    "price": "฿1,200",
                    "features": [
                      "Access to cardio equipment",
                      "Limited access to weightlifting area (3 days/week)",
                      "Access during off-peak hours",
                      "Student ID required"
                    ]
                  },
                  {
                    "id": 6,
                    "option_name": "Corporate Membership",
                    "price": "฿3,000 per employee",
                    "features": [
                      "Discounted rate for company employees",
                      "Access to all equipment and facilities",
                      "Customized corporate fitness programs",
                      "Monthly progress reports"
                    ]
                  }
            ]
        


    return (
        <div className="m-8">
            <h2 className="text-4xl mb-6">The best prices in the town</h2>
            <div className="grid grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;