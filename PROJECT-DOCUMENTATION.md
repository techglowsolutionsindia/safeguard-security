# SafeGuard Security — Project Documentation

**Developer:** TechGlow Solutions
**Last Updated:** 10 November 2026
**Project Status:** Local development and final audit in progress
**Project Closure:** Pending GitHub deployment, final verification and Google Drive backup

---

## 1. Project Overview

- Project Name: SafeGuard Security
- Website Type: Security Services — Single-Page Landing Website
- Developer: TechGlow Solutions
- Local Project Folder: `D:\web-projects\safeguard-security\`
- Technologies: HTML5, CSS3, Vanilla JavaScript
- Frontend Hosting: GitHub Pages — pending verification
- Backend: Google Apps Script
- Enquiry Storage: Google Sheets
- Email Integration: Owner notification and customer acknowledgement
- Website Objective: Showcase security services and collect security quotation enquiries.
- Project Completion Date: Pending

This website is a TechGlow Solutions portfolio demonstration. Sample testimonials are not actual customer reviews.

---

## 2. GitHub and Hosting

- GitHub Account: `techglowsolutionsindia`
- Repository Name: `safeguard-security` — planned; creation not yet verified
- Repository URL: Pending verification
- GitHub Pages URL: Pending verification
- Git Branch: Pending verification
- Latest Commit: Pending verification
- Deployment Status: Not yet confirmed

Use the existing project folder as the Git working repository. Do not create a duplicate project folder.

After deployment, record the verified repository URL, live URL, branch, commit and deployment date.

---

## 3. Project Structure

Project root:

`D:\web-projects\safeguard-security\`

### Main HTML Files

- `index.html` — Main security services landing page
- `sitemap.html` — Human-readable website sitemap

### CSS Files Referenced by index.html

- `assets/css/variables.css`
- `assets/css/base.css`
- `assets/css/layout.css`
- `assets/css/header.css`
- `assets/css/footer.css`
- `assets/css/landing-page.css`
- `assets/css/responsive.css`

### JavaScript

- `assets/js/landing-page.js` — Testimonials, FAQ, contact tabs and quotation enquiry functionality

Other JavaScript files, if present, must be verified during the final audit.

### Branding

- `assets/images/logo/safeguard-logo.svg` — Horizontal brand logo
- `assets/images/logo/favicon.svg` — SVG favicon

### Images

- `assets/images/hero/`
- `assets/images/about/`
- `assets/images/process/`
- `assets/images/faq/`

Images primarily use WebP format.

### Configuration Files

- `sitemap.xml`
- `robots.txt`
- `.gitignore`
- `PROJECT-DOCUMENTATION.md`

Verify the complete project directory before final closure.

---

## 4. Website Sections

The landing page contains:

1. Home / Hero — `#home`
2. About Us — `#about`
3. Security Services — `#services`
4. Why Choose Us — `#why-choose-us`
5. Industries We Protect — `#industries`
6. Our Security Process — `#process`
7. Testimonials — `#testimonials`
8. Frequently Asked Questions — `#faq`
9. Contact / Request Quote — `#contact`

### Main Security Services

- Residential Security
- Corporate Security
- Commercial Security
- Industrial Security
- Event Security
- Access Control & Monitoring

The quotation form also provides an option for other security requirements.

---

## 5. Branding

- Website Name: SafeGuard Security
- Primary Color: Midnight Navy — `#0B1B2B`
- Accent Color: Gold
- Heading Font: Montserrat
- Body Font: Inter
- Navbar Logo: `assets/images/logo/safeguard-logo.svg`
- Favicon: `assets/images/logo/favicon.svg`

The SVG logo and favicon were reviewed during the audit.

Footer logo usage and display require final verification.

---

## 6. SEO Configuration

### Verified in index.html

- Descriptive page title
- Meta description
- Robots meta tag
- Semantic HTML headings
- Descriptive navigation
- Internal section links
- Open Graph title and description
- Twitter sharing metadata
- SVG favicon reference

### Pending

- Canonical URL
- Absolute Open Graph URL
- Social sharing image, if required
- Structured data suitability
- Final live SEO verification
- Search engine indexing checks

Do not insert an unverified canonical URL.

---

## 7. HTML Sitemap

File: `sitemap.html`

Status: Rewritten for SafeGuard Security on 10 November 2026.

Includes links to the website's main sections.

The previous PixelFrame Studio branding and links were removed.

Final browser verification of all links remains required.

---

## 8. XML Sitemap

File: `sitemap.xml`

Status: Pending verified live URL.

Current file contains an empty valid XML sitemap structure.

After GitHub Pages deployment:

1. Confirm the live homepage URL.
2. Add its canonical URL to `sitemap.xml`.
3. Verify the published XML sitemap.
4. Update `robots.txt`.
5. Verify the canonical tag in `index.html`.

Do not submit an empty or placeholder sitemap to search engines.

---

## 9. Robots Configuration

File: `robots.txt`

Current configuration:

```text
User-agent: *
Allow: /
```

After deployment, add the verified absolute XML sitemap URL.

No previous project sitemap URL should remain.

---

## 10. Google Organic Sitelinks Readiness

### Current Preparation

- Descriptive section headings
- Clear navigation
- Semantic page structure
- Internal anchor links
- Human-readable HTML sitemap

### Pending Verification

- Live navigation functionality
- Canonical URL
- XML sitemap
- Robots configuration
- Crawlability
- Search engine indexing

Google determines organic sitelinks automatically. Their appearance cannot be guaranteed.

---

## 11. Google Analytics 4 Readiness

- GA4 Property: Not confirmed
- Measurement ID: Not assigned
- Tracking Code: Not installed
- Tracking Status: Inactive
- Readiness: Prepared for future integration

### Planned Tracking

- Page views
- Request Quote CTA interactions
- Confirmed successful quotation enquiries

### Activation Procedure

1. Create a GA4 property.
2. Create a web data stream.
3. Obtain the actual measurement ID.
4. Install the official GA4 tracking code.
5. Configure relevant interaction events.
6. Verify events through GA4 Realtime and DebugView.
7. Review applicable privacy and consent requirements.
8. Update this documentation.

Never use a placeholder measurement ID in production.

---

## 12. Application Architecture

### Frontend

Static HTML5, CSS3 and Vanilla JavaScript.

### Backend

Google Apps Script Web App.

### Database / Storage

Google Sheets.

### Email Integration

Google Apps Script MailApp.

### Submission Process

1. Customer completes the Request Quote form.
2. Frontend validates the required information.
3. Frontend generates a unique request ID.
4. Submission is dispatched to Google Apps Script.
5. Backend validates and records the enquiry.
6. Backend attempts owner and customer emails independently.
7. Frontend checks the backend for the saved request ID.
8. Success appears only after storage is confirmed.

The frontend uses a `no-cors` POST followed by JSONP-based confirmation polling.

A dispatched POST request alone does not prove successful storage.

---

## 13. Google Apps Script Backend

### Apps Script Project

SafeGuard Security Backend

### Deployment

- Platform: Google Apps Script
- Deployment Type: Web App
- Verified Deployment Version: 1

### Web App Endpoint

```text
https://script.google.com/macros/s/AKfycby_D_5mmOeGXrOTAfedyfDtnTdTcmiIIhCmeJSy3i2wxgB0C-REZtbwiRkhwTjXiyVF/exec
```

This endpoint is referenced by the frontend quotation form.

### Backend Script

`Code.gs`

### Main Operations

- `doPost` — Validate and process enquiry submissions
- `doGet` — Check saved enquiry status using the request ID
- `setupSheet` — Prepare the spreadsheet structure

### Security and Reliability

- Backend field validation
- UUIDv4 request ID validation
- Request deduplication
- LockService concurrency protection
- Submission rate limiting
- Independent email attempts
- Saved-record verification

### Important Configuration

- `SHEET_NAME`: `Data`
- `WEBSITE_NAME`: `SafeGuard Security`
- `MAX_MESSAGE_LENGTH`: `1000`
- `RATE_LIMIT_SECONDS`: `60`

Owner email is configured in the backend and should be verified before future commercial use.

Do not publish private customer records or credentials.

---

## 14. Google Sheets Integration

### Spreadsheet

SafeGuard Security

### Worksheet

`Data`

### Spreadsheet Columns

1. Timestamp
2. Enquiry ID
3. Request ID
4. Customer Name
5. Email Address
6. Phone Number
7. Security Service
8. Additional Requirements
9. Owner Email Status
10. Customer Email Status
11. Submission Status

### Confirmed Functionality

A real test enquiry was successfully saved on 10 November 2026.

The corresponding owner and customer emails were received.

Email statuses recorded:

- Owner Email Status: `Send Accepted`
- Customer Email Status: `Send Accepted`
- Submission Status: `Saved - Email Attempts Accepted`

Email acceptance does not guarantee inbox delivery for every future enquiry.

---

## 15. Contact Form Integration

### Relevant Files

- `index.html`
- `assets/js/landing-page.js`

### Contact Tabs

1. Request Quote
2. Call Us
3. Email Us

### Request Quote

Functional enquiry form integrated with Google Apps Script.

### Call Us

Informational placeholder.

Business telephone details have not yet been configured.

### Email Us

Informational placeholder.

Business email details have not yet been configured.

Do not add unverified telephone numbers or email addresses.

---

## 16. Contact Form Validation

### Required Fields

- Customer Name
- Phone Number
- Email Address
- Security Service

### Optional Field

- Additional Requirements

### Phone Validation

International format is supported.

For Indian numbers:

- Country prefix: `+91`
- Ten-digit mobile number
- Mobile number begins with 6, 7, 8 or 9

### Additional Validation

- Email format
- Required fields
- Message length
- Request ID format
- Backend validation

### Duplicate Prevention

Request IDs are used to prevent repeated processing of the same enquiry.

### Pending Tests

- Empty required fields
- Invalid email
- Invalid phone
- Repeated submissions
- Rate limiting
- Timeout and uncertain submission status
- Form reset
- Success-message dismissal

---

## 17. Confirmed End-to-End Testing

**Test Date:** 10 November 2026

### Passed

- Request Quote submission
- Google Apps Script processing
- Google Sheets record creation
- Owner notification email received
- Customer acknowledgement email received
- Matching enquiry ID across records and emails
- Backend-confirmed frontend success message

### Not Yet Fully Verified

- All invalid-input scenarios
- All duplicate-submission scenarios
- Desktop responsiveness
- Tablet responsiveness
- Mobile responsiveness
- Browser console checks
- Every navigation link
- Live GitHub Pages submission

Do not mark the entire website audit complete until the remaining checks pass.

---

## 18. Local Development and Testing

### Local Folder

`D:\web-projects\safeguard-security\`

### Development Tools

- Visual Studio Code
- Live Server
- Browser Developer Tools

### Local Testing Procedure

1. Open the project folder in VS Code.
2. Launch `index.html` using Live Server.
3. Check navigation and anchor links.
4. Verify logos, favicon and images.
5. Test desktop, tablet and mobile layouts.
6. Test testimonials and FAQ interactions.
7. Test all three contact tabs.
8. Submit a controlled quotation enquiry.
9. Verify the Google Sheets record.
10. Verify both email notifications.
11. Check browser console and network errors.

No Node.js server is required for the confirmed static frontend.

---

## 19. Git Configuration

### Main Git Working Folder

`D:\web-projects\safeguard-security\`

### .gitignore

The file excludes:

- Environment files
- Private keys
- Common credential files
- Node.js dependencies
- Debug logs
- Local operating-system files

### Pending

- Verify Git initialization
- Verify remote repository
- Verify current branch
- Review tracked files
- Verify working tree
- Commit final website files
- Push to GitHub

Never commit private credentials or customer information.

---

## 20. GitHub Pages Deployment

### Status

Pending verification.

### Deployment Procedure

1. Complete mandatory local fixes.
2. Verify Git configuration.
3. Create or confirm the GitHub repository.
4. Commit approved project files.
5. Push to the main branch.
6. Configure GitHub Pages.
7. Verify the published website.
8. Confirm assets and navigation.
9. Test the live quotation form.
10. Update canonical metadata.
11. Finalize `sitemap.xml`.
12. Finalize `robots.txt`.
13. Update project documentation.
14. Complete Google Drive backup.

Record the actual deployment date and URL after confirmation.

---

## 21. Environment Variables and Secrets

### Frontend

No project-specific frontend environment variables have been verified.

### Backend

Google Apps Script configuration is maintained in `Code.gs`.

### Relevant Backend Configuration Names

- `SHEET_NAME`
- `WEBSITE_NAME`
- `OWNER_EMAIL`
- `MAX_MESSAGE_LENGTH`
- `RATE_LIMIT_SECONDS`

### Security Rules

- Never publish private API keys.
- Never commit credentials.
- Never publish private spreadsheet data.
- Keep backend access permissions under review.
- Preserve `.gitignore` security exclusions.

---

## 22. Maintenance

### Frontend

- Review navigation and links.
- Verify image loading.
- Test responsive layouts.
- Check browser console errors.
- Review accessibility and SEO metadata.

### Backend

- Monitor Apps Script execution errors.
- Review Google Sheets records.
- Check email acceptance and delivery.
- Verify deployment permissions.
- Retest after changes.

### Future Custom Domain

When a custom domain is purchased:

1. Configure the domain and HTTPS.
2. Update canonical URLs.
3. Update Open Graph URLs.
4. Update XML sitemap.
5. Update robots.txt.
6. Verify frontend asset paths.
7. Retest the Apps Script integration.
8. Review GA4 configuration.
9. Update project documentation.

---

## 23. Google Drive Backup

### Status

Pending.

### Backup Location

To be confirmed.

### Backup Requirements

Include:

- HTML files
- CSS files
- JavaScript files
- Website images
- SVG logos
- Sitemap files
- `robots.txt`
- `.gitignore`
- `PROJECT-DOCUMENTATION.md`

Do not include credentials, private customer records or secret files.

Record the verified backup date after completion.

---

## 24. Pending Tasks

- [ ] Final desktop responsiveness testing
- [ ] Final tablet responsiveness testing
- [ ] Final mobile responsiveness testing
- [ ] Final navigation and interaction testing
- [ ] Complete negative form-validation tests
- [ ] Verify footer SVG logo
- [ ] Verify all project assets
- [ ] Verify Git repository configuration
- [ ] Deploy website to GitHub Pages
- [ ] Verify live website and quotation form
- [ ] Configure canonical URL
- [ ] Finalize `sitemap.xml`
- [ ] Finalize `robots.txt`
- [ ] Verify Google organic sitelinks readiness
- [ ] Verify GA4 readiness
- [ ] Complete Google Drive backup
- [ ] Record deployment and backup details
- [ ] Finalize project documentation

---

## 25. Final Project Closure Checklist

- [x] Main landing page created
- [x] SVG brand logo and favicon reviewed
- [x] HTML sitemap rewritten for SafeGuard Security
- [x] XML sitemap previous-project URL removed
- [x] Robots previous-project URL removed
- [x] `.gitignore` reviewed
- [x] Google Apps Script integration configured
- [x] Google Sheets recording tested
- [x] Owner email received
- [x] Customer email received
- [x] Backend-confirmed success message tested
- [ ] Full responsive audit
- [ ] Full local functional audit
- [ ] Final SEO and indexing configuration
- [ ] Git configuration verification
- [ ] GitHub Pages deployment
- [ ] Live quotation form verification
- [ ] Final canonical and sitemap configuration
- [ ] GA4 readiness verification
- [ ] Google Drive backup
- [ ] Final documentation update
- [ ] Project closure

---

**Documentation Last Updated:** 10 November 2026

**Final Project Status:** Audit in progress. Do not declare the project complete until deployment, final verification, documentation and backup are confirmed.
