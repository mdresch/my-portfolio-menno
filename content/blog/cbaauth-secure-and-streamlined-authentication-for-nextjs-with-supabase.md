---
title: CBA-Auth: Secure and Streamlined Authentication for Next.js with Supabase
date: 2025-04-12
excerpt: CBA-Auth is a modern authentication system designed to simplify and secure user management for Next.js applications using Supabase. It addresses the common challenges of complex setup, security vulnerabilities, and inflexibility found in traditional authentication methods. CBA-Auth provides a streamlined, customizable solution with a user-friendly API and robust security features, enabling rapid development and enhanced user experience.
categories: 
   - TypeScript
   - Next JS
   - Supabase
---

# Enhanced Security Features Users Known Locations

To enhance security by using location-based data for TOTP requests, you can implement a system that checks the travel time between the known location from a previous login and the new location. This ensures that the travel time does not exceed what is realistically possible, adding an extra layer of security. Here’s how you can approach this:

### Steps to Implement Location-Based Security for TOTP

1. **Capture Location Data**: When a user logs in, capture their location data (e.g., using IP geolocation).
2. **Store Previous Location**: Store the location data securely along with the timestamp of the login.
3. **Calculate Distance and Travel Time**: When a new login attempt is made, calculate the distance between the previous location and the new location.
4. **Determine Maximum Possible Travel Time**: Use the maximum speed of commercial airplanes to determine the minimum possible travel time between the two locations.
5. **Compare Travel Time**: Compare the calculated travel time with the actual time elapsed between the two logins.
6. **Additional Verification**: If the travel time is unrealistic, prompt the user for additional verification.

### Example Calculation

#### Step 1: Capture and Store Location Data

* **Previous Login**: Location A (e.g., New York, USA), Timestamp: 2025-03-14 10:00 AM
* **New Login**: Location B (e.g., Tokyo, Japan), Timestamp: 2025-03-15 10:00 AM

#### Step 2: Calculate Distance

* **Distance**: Approximately 10,800 km (using online distance calculators).

#### Step 3: Determine Maximum Possible Travel Time

* **Average Speed of Commercial Airplane**: 900 km/h.
    * Set variabel User Allowed Travel Type: Walking (5 km/h), Car (120 km/h) or Airplane (900 km/h)
* **Minimum Travel Time**:Travel Time=10,800 km900 km/h=12 hoursTravel Time=900 km/h10,800 km​=12 hours

#### Step 4: Compare Travel Time

* **Actual Time Elapsed**: 24 hours.
* **Comparison**: Since 24 hours is greater than the minimum travel time of 12 hours, the travel is possible.

#### Step 5: Additional Verification

* If the calculated travel time was less than the minimum possible travel time, prompt the user for additional verification (e.g., SMS OTP, email verification). To verify location and stop a potential risky login.

### Tools and Libraries

* **Geolocation API**: To capture and determine user location.
* **Distance Calculation API**: To calculate the distance between two locations.
* **Travel Time Calculation**: Use average speeds of commercial airplanes for realistic travel time estimates.

### Security Considerations

* **Rate Limiting**: Implement rate limiting on location-based checks to prevent abuse.
* **Data Privacy**: Ensure that location data is stored securely and in compliance with privacy regulations.
* **Fallback Mechanisms**: Provide alternative verification methods if location-based checks fail.

By implementing these steps, you can add a robust layer of security to your TOTP system, ensuring that login attempts are realistic and reducing the risk of unauthorized access.
To enhance security by verifying open sessions and their known locations upon login, you can implement a system that compares the current login location with the locations of existing sessions. This helps detect suspicious activity and adds an extra layer of security. Here’s how you can approach this:

### Steps to Verify Open Sessions and Compare Locations

1. **Capture Current Login Location**: When a user logs in, capture their current location using IP geolocation.
2. **Retrieve Open Sessions**: Retrieve all active sessions for the user from your session management system.
3. **Compare Locations**: Compare the current login location with the locations of the open sessions.
4. **Determine Travel Time**: Calculate the travel time between the previous known location and the new login location.
5. **Verify Feasibility**: Ensure the travel time is realistic. If the travel time is impossible, prompt the user for additional verification.

### Example Implementation

#### Step 1: Capture Current Login Location

* **Action**: Use an IP geolocation service to determine the user's current location upon login.

#### Step 2: Retrieve Open Sessions

* **Action**: Query your session management system to get all active sessions for the user. This includes session IDs, timestamps, and locations.

#### Step 3: Compare Locations

* **Action**: Compare the current login location with the locations of the open sessions.

#### Step 4: Determine Travel Time

* **Action**: Calculate the distance between the previous known location and the new login location.
* **Formula**:Travel Time=DistanceSpeedTravel Time=SpeedDistance​Use the maximum speed of commercial airplanes (approximately 900 km/h) for the calculation1.

#### Step 5: Verify Feasibility

* **Action**: Compare the calculated travel time with the actual time elapsed between the sessions.
* **Example**:
    * **Previous Session**: Location A (e.g., New York, USA), Timestamp: 2025-03-14 10:00 AM
    * **New Login**: Location B (e.g., Tokyo, Japan), Timestamp: 2025-03-15 10:00 AM
    * **Distance**: Approximately 10,800 km
    * **Minimum Travel Time**:Travel Time=10,800 km900 km/h=12 hoursTravel Time=900 km/h10,800 km​=12 hours
    * **Actual Time Elapsed**: 24 hours
    * **Comparison**: Since 24 hours is greater than the minimum travel time of 12 hours, the travel is possible.

### Additional Verification

* **Action**: If the travel time is unrealistic, prompt the user for additional verification (e.g., SMS OTP, email verification).

### Tools and Libraries

* **Geolocation API**: To capture and determine user location.
* **Distance Calculation API**: To calculate the distance between two locations.
* **Session Management System**: To manage and retrieve active sessions.

### Security Considerations

* **Rate Limiting**: Implement rate limiting on location-based checks to prevent abuse.
* **Data Privacy**: Ensure that location data is stored securely and in compliance with privacy regulations.
* **Fallback Mechanisms**: Provide alternative verification methods if location-based checks fail.

By implementing these steps, you can add a robust layer of security to your TOTP system, ensuring that login attempts are realistic and reducing the risk of unauthorized access.

## One Uniqueness Too Many preferably All

Confirm One from Many to ensure only one unique owner is present among all.
SES CBA o3b mPower - One To Many Confirmation - How fast to retrieve confirmation global one of many confirmations on uniqueness of existence. Usage of Express Route circuits and creating a layer of Virtual WANs to review the required one to Many as a result within a time frame of 4 m/s have global confirmation. Offering one to many uniqueness confirmation within that set timeframe to finalize a transaction.
Current Users location on which website in the encryption to ensure both the URL and confirmation provided is only on the location the user is located. **MitM** exclude the possibility of having active sessions on locations that do not belong to the owner. The URL in screen should be included in the MFA confirmation Session ID session and the confirmation the user provides credentials to known existent certified authority. No acceptance from unknown or new sources when user is logging in. The similar process should be approved by the administrator prior to being accepted a source for validation. The collective of Administrators offering the certified location and acceptance of URL or authority where one can submit credentials towards.
Creating a website that offers MFA with these features becomes critical to be validated prior to a client attempting to submit their credentials. Submit client credentials from unknown or uncertified locations should trigger the risk mitigation procedures to ensure hostile attempts are traced to source. Verify flag and trigger the workbook for incidents management in for example my preferred Sentinel or if partner has setup the required credentials and the approved workflow for escalation of break the glass procedures from Lighthouse service offerings.
Go deeper using UEBA entity pages and run entity specific playbooks on bookmarked entities. Use built-in actions to create new analytics rules, threat indicators and incidents based on findings.
Blueprint (preview) implementation preferences.

## Securely connect to Azure—without using the public internet

![](https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/pricatecloud-icon-527281?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=48&hei=48&qlt=100&fit=constrain)

### Private cloud connections to Azure

Seamlessly connect your on-premises network to Azure, ensuring a private and secure pathway for your data to the cloud.
![](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/bznfpxi6-icon-acom-clock?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=48&hei=48&qlt=100&fit=constrain)

### Increased reliability and speed

Experience faster data transfers and high reliability with ExpressRoute, designed to handle mission-critical workloads without interruptions.
![](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/i5is47zc-01-FeatureGrid-Icon-24x24?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=48&hei=48&qlt=100&fit=constrain)

### Consistent latency

Deliver predictable performance for your applications, offering stable and consistent latency for an improved user experience.
![](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/ok796b5s-icon-acom-data-line?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=48&hei=48&qlt=100&fit=constrain)

### High-speed direct connection to your WAN

Connect directly to Azure with 10G or 100G dedicated ports from your on-premises networks, bypassing service provider infrastructure for enhanced performance and control.
![](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/vpz16ucg-icon-acom-safety?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=48&hei=48&qlt=100&fit=constrain)

### Safeguard your connections with physical link encryption

Enable MACsec encryption for point-to-point connections with ExpressRoute Direct, ensuring secure access to the Microsoft Network.
![](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/8ngg6etz-06-FeatureGrid-Icon-24x24?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=48&hei=48&qlt=100&fit=constrain)

### Bridge on-premises networks with the Microsoft global network

Use Global Reach to connect on-premises locations across regions through the secure and reliable Microsoft global network.
![](https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/ipv6-icon-390670?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=48&hei=48&qlt=100&fit=constrain)

### Support IPv6 workloads

Enable connectivity from on-premises environments for workloads configured with both IPv4 and IPv6.
Maintain segregation of duties and licensing separately due to the importance to the entire industry. Segregating Satellite from terrestrial networks. A similar engagement between the blurring of responsible ownership in Banking and IT (FinTech) that cannot do without the other but should remain very clearly segregated to avoid confusion between ownership of the technology and the ownership of a banking license. Among other similar the software and hardware where hardware has software implemented as in Rom and Ram is used during the computers usage. Whereby the ROM which mainly initially was identified as a BIOS got blurred and not see allot of ROM back into practices.
**However, the lines are blurring somewhat in modern telecommunications:**

* **Convergence:** The industry is moving towards convergence, where companies are offering bundled services that may combine satellite, fiber, cable, and mobile technologies.
* **Integration:** Some telecommunications groups might integrate satellite capabilities more closely into their overall service portfolio, especially for expanding reach to underserved areas or for backup/resiliency.
* **Example - VodafoneZiggo (Liberty Global JV):** Even though VodafoneZiggo in the Netherlands is primarily a cable and mobile operator, Vodafone (one of the parent companies) has broader interests in satellite and other technologies globally. There might be some level of coordination or leveraging of expertise within the larger Vodafone group, even if VodafoneZiggo's day-to-day operations are focused on terrestrial networks.

You've highlighted a very important point about the **need to maintain segregation of duties and separate licensing** in industries that are becoming increasingly intertwined, especially when dealing with critical infrastructure and regulated sectors. Your examples of satellite/terrestrial networks, banking/FinTech, and hardware/software (ROM/RAM) are excellent analogies to illustrate this principle.
Let's break down why this segregation is crucial and how it applies to these different domains:
**1\. Importance of Segregation of Duties and Separate Licensing:**
The core rationale behind maintaining segregation and separate licensing stems from several key factors:

* **Risk Management and Accountability:** Segregation of duties ensures that no single entity has unchecked power or control over all aspects of a critical system. Separate licensing creates clear lines of responsibility and accountability for different functions. This is vital for risk management, as it prevents single points of failure and makes it easier to identify and address issues.
* **Regulatory Clarity and Oversight:** Different types of services and infrastructure often fall under different regulatory regimes. For example, satellite communications are regulated differently from terrestrial telecommunications, and banking is regulated distinctly from technology provision. Separate licensing allows regulators to apply appropriate oversight and rules tailored to the specific risks and characteristics of each sector. Blurring these lines can create regulatory gaps and loopholes.
* **Preventing Conflicts of Interest:** Segregation of duties can prevent conflicts of interest. For instance, if a company both owns the core infrastructure *and* provides regulated services on top of it, there's a potential conflict. They might favor their own services or engage in anti-competitive practices. Separate licensing and ownership structures can mitigate these conflicts.
* **Promoting Innovation and Competition:** While it might seem counterintuitive, segregation can sometimes *promote* innovation. By separating infrastructure providers from service providers, you can create a more level playing field for competition and innovation at different layers of the value chain. Smaller, specialized companies can innovate in services or technology without needing to control the entire stack.
* **Ensuring Stability and Resilience:** In critical industries, stability and resilience are paramount. Segregation of duties and licensing can contribute to a more robust and resilient ecosystem. If one part of the system fails (e.g., a service provider has issues), the underlying infrastructure (e.g., the network) can remain stable and be used by other providers.

**2\. Segregating Satellite from Terrestrial Networks:**
As you pointed out, maintaining a degree of segregation between satellite and terrestrial networks is important for the telecommunications industry:

* **Different Licensing Regimes:** Satellite spectrum and orbital slots are licensed and regulated internationally and nationally, often by different bodies than those regulating terrestrial spectrum and networks. Combining licensing could create significant regulatory complexity.
* **Different Infrastructure and Expertise:** Operating satellites and terrestrial fiber/cable networks require very different technical expertise, infrastructure, and operational models. Trying to manage them under a completely unified structure could lead to inefficiencies and diluted expertise.
* **Different Use Cases and Markets:** While there's convergence, satellite and terrestrial networks often serve different primary use cases and markets. Satellite excels in broadcast, remote areas, and mobility, while terrestrial networks are dominant for mass-market broadband in dense areas. Maintaining some specialization allows for better focus on these distinct needs.
* **Resilience and Redundancy:** Having both satellite and terrestrial networks as somewhat separate ecosystems provides valuable redundancy for the overall communication infrastructure. If terrestrial networks are disrupted (e.g., by a major disaster), satellite communications can still be available, and vice versa.

**3\. Banking and FinTech – Segregation of Banking License vs\. Technology Ownership:**
Your banking and FinTech example is particularly relevant:

* **Banking License as a Regulated Activity:** Holding a banking license is a heavily regulated activity because banks handle public money and are crucial to the financial system's stability. Banking licenses come with stringent capital requirements, compliance obligations, and regulatory oversight.
* **FinTech Innovation in Technology:** FinTech companies often innovate in technology related to financial services – payment systems, lending platforms, investment tools, etc. They are technology providers.
* **Need for Clear Segregation:** It's crucial to maintain a clear segregation between:
    * **Entities that hold banking licenses and perform regulated banking activities.** These entities are subject to full banking regulation.
    * **Technology providers (FinTechs) that *enable* or *support* financial services but do not themselves hold banking licenses.** FinTechs might be regulated in specific areas (e.g., data privacy, anti-money laundering), but not to the same extent as licensed banks.
* **Avoiding "Shadow Banking" and Regulatory Arbitrage:** Without clear segregation, there's a risk of "shadow banking" – entities performing banking-like functions without being subject to banking regulations. This can create systemic risks and undermine the stability of the financial system. Similarly, unclear lines could lead to regulatory arbitrage, where companies try to exploit loopholes by blurring the lines between regulated and unregulated activities.

**4\. Hardware and Software \(ROM/RAM\) – Conceptual Segregation:**
Your hardware/software analogy, especially the ROM/RAM example, is insightful for understanding layered systems:

* **Hardware (Foundation):** Hardware is the physical foundation – the computer itself, the network cables, the physical infrastructure. It's relatively fixed and provides the basic capabilities. Think of terrestrial networks as the "hardware" of communication.
* **Software (Operating Logic and Applications):** Software is the set of instructions and logic that runs on the hardware. It's more flexible and can be updated and changed. Think of satellite communications as a specific "software" or application of communication technology, operating alongside terrestrial "hardware."
* **ROM (BIOS – Initial Foundation):** ROM (Read-Only Memory), particularly the BIOS (Basic Input/Output System) initially, is like the *firmware* deeply embedded in the hardware. It's the foundational software that boots up the system and provides basic functions. Early ROM was very fixed and separate.
* **RAM (Working Memory - Dynamic):** RAM (Random Access Memory) is the working memory where software runs and data is processed dynamically. It's more flexible and volatile.
* **Blurring Lines, but Conceptual Segregation Remains Useful:** While modern systems are much more complex, and the lines between firmware, operating systems, and applications are less rigid than in the past, the *conceptual* segregation of hardware and software layers remains vital for system design, understanding, and management. You still need to understand the foundational hardware layer separately from the software running on top. Similarly, understanding the distinct roles of satellite and terrestrial networks, even as they converge, is crucial.

**The Blurring Lines and the Challenge:**
You are correct that in all these areas (telecoms, finance, computing), the lines are becoming increasingly blurred due to technological convergence and integration. This creates challenges for maintaining effective segregation of duties and relevant licensing frameworks.
**The Key is to Evolve Regulatory and Operational Models:**
The solution is not necessarily to rigidly enforce complete separation in all cases, as that might stifle innovation and efficiency. Instead, the approach needs to be:

* **Adaptable Regulatory Frameworks:** Regulatory frameworks need to evolve to recognize the blurring lines but still maintain core principles of risk management, consumer protection, and fair competition. This might involve new types of licenses, more nuanced regulations, and greater inter-agency cooperation.
* **"Layered" Security and Responsibility Models:** Even with integration, it's essential to maintain layered security and responsibility models. Clearly define who is responsible for what at different layers of the technology stack or service delivery chain.
* **Transparency and Disclosure:** Increased transparency and disclosure are crucial. When services become more integrated, it's important for users and regulators to understand who is providing what part of the service and who is accountable for different aspects.
* **Focus on Outcomes and Principles, Not Just Rigid Separation:** The goal is not to maintain absolute separation for its own sake but to achieve the underlying objectives: risk management, accountability, fair competition, and stability. The methods to achieve these objectives may need to adapt to the changing technological landscape, even if it means some blurring of traditional lines.

In conclusion, your point about maintaining segregation of duties and separate licensing, even as industries converge, is highly relevant and insightful. It's a fundamental principle for responsible development and stability in critical sectors, and it requires careful consideration and adaptive approaches as technology continues to evolve.
Not only legal basis or a data processing agreement with consent of the subject parties to ensure clarity remains in which part is processed where and the maintenance of responsible ownership.
