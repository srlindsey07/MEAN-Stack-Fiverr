import { ObjectId } from 'mongodb';
import mongoose, { Schema } from 'mongoose';
import { faker } from '@faker-js/faker';
import { INestedSubcategory, NestedSubcategory } from '../models/nested-subcategory';
import { ISubcategory, Subcategory } from '../models/subcategory';
import { Category, ICategory, ICategoryInfo } from "../models/category";
import { User } from '../models/user';
import { Gig, IGig } from '../models/gig';

////////////////
// CATEGORIES //
////////////////
const getIds = (array: ICategoryInfo[], startIndex: number, endIndex: number): (Schema.Types.ObjectId | undefined)[] => {
    const slice: ICategoryInfo[] = array.slice(startIndex, endIndex + 1);
    return slice.map((item) => item._id);
}

let _nestedSubcategories: INestedSubcategory[];
let _subcategories: ISubcategory[];
export const seedCategories = async () => {
    // NESTED SUBCATEGORIES
    _nestedSubcategories = [
        // Social Media Marketing
        new NestedSubcategory({ _id: new ObjectId(), name: "Consultation & Audience Research", slug: "consultation-audience-research", subtitle: "Get the guidance you need to build your social media presence" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Profile Setup & Integration", slug: "profile-setup-integration", subtitle: "Get your social presence up and running" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Social Content", slug: "social-content", subtitle: "Engage your followers with shareable content by top creators" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Social Media Management", slug: "social-media-management", subtitle: "Turn followers into raving fans with social media management services" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Social Ad Campaigns", slug: "social-ad-campaigns", subtitle: "Attract new leads and followers through the power of social advertising" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Analytics & Tracking", slug: "analytics-tracking", subtitle: "Ensure you're getting the most of your social content and ads with analytics and tracking services" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Social Ad Management & Optimization", slug: "social-ad-management-optimization", subtitle: "Get more out of your social ads with the help of optimization experts" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Shoutouts & Promotion", slug: "shoutouts-promotion", subtitle: "Get your message seen by the all right people, in the all right places" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Social Media Strategy", slug: "social-media-strategy", subtitle: "Create the best strategy for social media advertising and profile management with these services" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Shoppable Content", slug: "shoppable-content", subtitle: "Empower your consumers to shop by setting up social media shopping features" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Organic Social Promotions", slug: "organic-social-media", subtitle: "Promote your business organically with our social media experts" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Paid Social Media", slug: "paid-social-media", subtitle: "Hire paid social ad experts and campaign managers to promote your business" }),
        // Video Marketing
        new NestedSubcategory({ _id: new ObjectId(), name: "Consultation & Audience Research", slug: "consultation-audience-research", subtitle: "Build your social video strategy with the help of experts" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Social Video Content", slug: "social-video-content", subtitle: "Utilize video to excite your audience and promote your brand" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Social Video Enhancements", slug: "social-video-enhancements", subtitle: "Increase video performance with customized enhancements" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Video SEO", slug: "video-seo", subtitle: "Rank up your videos with SEO video services." }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Organic Video Promotion & Distribution", slug: "video-promotion-distribution", subtitle: "Share your video in all the right places and grab the attention of all the right audiences." }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Video Ad Campaigns", slug: "video-ad-campaigns", subtitle: "Utilize video advertising to stay ahead of the competition" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "YouTube Channel Management", slug: "youtube-channel-management", subtitle: "Hire a freelancer to manage your YouTube channel, engage with your audience and help you grow." }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Online Video Advertising", slug: "online-video-advertising", subtitle: "Access top freelance talent for customized video ads that elevate your brand's online presence and appeal." }),
        new NestedSubcategory({ _id: new ObjectId(), name: "YouTube Monetization", slug: "youtube-monetization", subtitle: "Hire YouTube monetization experts to maximize your channel's revenue potential and audience engagement." }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Live Video Streaming", slug: "live-video-streaming", subtitle: "Enhance your online visibility with dynamic live video streaming services offered by creative freelancers." }),
        // Display Advertising
        new NestedSubcategory({ _id: new ObjectId(), name: "Campaign Setup & Management", slug: "management-services", subtitle: "Run campaigns and drive more results with display advertising services " }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Ad Review & Optimization", slug: "optimization-services", subtitle: "Optimize your display ads with better targeting, messaging and budgeting" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Retargeting", slug: "retargeting", subtitle: "Expand your reach by retargeting your ads to relevant customers" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Audio Advertising", slug: "audio-advertising", subtitle: "Run audio ad campaigns and reach your audience across all audio platforms " }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Streaming Ads", slug: "streaming-ads" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Native Advertising", slug: "native-advertising", subtitle: "Launch and maintain native advertising campaigns to reach more people online." }),
        // Podcast Marketing
        new NestedSubcategory({ _id: new ObjectId(), name: "Podcast Promotion", slug: "podcast-promotion", subtitle: "Find the right channels to promote your podcast and expand your audience" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Advertising within Podcasts", slug: "podcast-advertising", subtitle: "Get your message heard on other podcasts" }),
        // E-Commerce Marketing
        new NestedSubcategory({ _id: new ObjectId(), name: "Product Listings", slug: "product-listings", subtitle: "Create professional product listings, all in one place" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "E-Commerce SEO", slug: "ecommerce-seo-services", subtitle: "Get your products discovered by enhancing your storefronts and listings with E-Commerce SEO services. " }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Shoutouts & Promotion", slug: "shoutouts-promotion", subtitle: "Get your message seen by the all right people, in the all right places" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Website Promotion", slug: "website-promotion", subtitle: "Promote your online store to drive more sales and grow your business. " }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Promoted Listings", slug: "promoted-listings", subtitle: "Promote your products and listings to get discovered by your target audience." }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Social Commerce", slug: "social-commerce", subtitle: "Unlock the power of social commerce for your business" }),
        // Email Marketing
        new NestedSubcategory({ _id: new ObjectId(), name: "Copywriting", slug: "copywriting", subtitle: "Refine your message and engage your audience with the perfect copy" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Email Templates", slug: "email-templates", subtitle: "Give your emails a professional look with template design services" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Email Platform Support", slug: "email-platform-support", subtitle: "Get help resolving any email platform issue that might be holding you back" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Audience Development", slug: "audience-development", subtitle: "Get help growing your reach and better understand your existing audience" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Campaign Management", slug: "campaign-management", subtitle: "Create and manage your email marketing campaigns with campaign management services" }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Email Automations", slug: "email-automation", subtitle: "Create smart email automations to improve your results and engage your costumers " }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Cold Emails", slug: "cold-emailing", subtitle: "Improve your cold emails efforts with smart tools and automations" }),
        // Social Media Design
        new NestedSubcategory({ _id: new ObjectId(), name: "Headers & Covers", slug: "headers-covers", subtitle: "Level-up your social channels with expertly designed headers and covers." }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Social Posts & Banners", slug: "social-posts-banners", subtitle: "Get social media posts and banners custom-designed for all the popular platforms." }),
        new NestedSubcategory({ _id: new ObjectId(), name: "Thumbnails Design", slug: "thumbnails-design", subtitle: "Attract more visitors with eye-catching thumbnail designs. " }),
        new NestedSubcategory({ _id: new ObjectId(), name: "AR Filters & Lenses", slug: "ar-filters-lenses", subtitle: "Engage your followers on social media with your own Augmented Reality (AR) filters." }),
    ];

    const imgOptions = (category: string): Object => {
        return { category: category };
    }

    // SUBCATEGORIES
    _subcategories = [
        // Marketing & Advertising
        new Subcategory({ _id: new ObjectId(), name: "Social Media Marketing", slug: "social-marketing", subtitle: "Boost your online presence with compelling social media content.", 
            nestedSubcategories: getIds(_nestedSubcategories, 0, 11), imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'social,media/all'})}),
        new Subcategory({ _id: new ObjectId(), name: "Video Marketing", slug: "online-video-marketing", subtitle: "Target the right audience and get better results  with the help of video marketing freelancers.", 
            nestedSubcategories: getIds(_nestedSubcategories, 12, 21), imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'video'})}),
        new Subcategory({ _id: new ObjectId(), name: "Display Advertising", slug: "display-advertising", subtitle: "Create, launch and maintain your display ad campaigns with advertising services", 
            nestedSubcategories: getIds(_nestedSubcategories, 22, 27), imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'advertising'})}),
        new Subcategory({ _id: new ObjectId(), name: "Podcast Marketing", slug: "podcast-marketing", subtitle: "Expand your audience with Podcast promotion services", 
            nestedSubcategories: getIds(_nestedSubcategories, 28, 29), imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'podcast'})}),
        new Subcategory({ _id: new ObjectId(), name: "E-Commerce Marketing", slug: "e-commerce-marketing", subtitle: "Grow sales and Improve your ecommerce marketing efforts with services that support Amazon, Ebay, Etsy, Shopify and more.", 
            nestedSubcategories: getIds(_nestedSubcategories, 30, 35), imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'shopping,online'})}),
        new Subcategory({ _id: new ObjectId(), name: "Email Marketing", slug: "email-marketing", subtitle: "Avoid the junk folder with freelance email marketing services", 
            nestedSubcategories: getIds(_nestedSubcategories, 36, 42), imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'email'})}),
        new Subcategory({ _id: new ObjectId(), name: "Social Media Design", slug: "social-media-design", subtitle: "Do social media better than the rest with custom-designed skins, avatars & more", 
            nestedSubcategories: getIds(_nestedSubcategories, 43, 46), imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'social,media/all'})}),
        // Graphics & Design
        new Subcategory({ _id: new ObjectId(), name: "Book Design", slug: "book-design", subtitle: "Allow your creativity to shine with a captivating book design.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'books'})}),
        new Subcategory({ _id: new ObjectId(), name: "Image Editing", slug: "image-editing", subtitle: "Get your visuals perfected, from products to portraits.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'images,editing'})}),
        new Subcategory({ _id: new ObjectId(), name: "Website Design", slug: "website-design", subtitle: "Get a beautiful website design that people love to engage with.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'website'})}),
        new Subcategory({ _id: new ObjectId(), name: "Packaging & Label Design", slug: "product-packaging-design", subtitle: "Make shoppers look twice with creative packaging and label designs.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'product,packaging'})}),
        new Subcategory({ _id: new ObjectId(), name: "Architecture & Interior Design", slug: "architectural-design-services", subtitle: "Get your project off the ground with detailed plans, 3D models, and more.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'interior,decorating'})}),
        new Subcategory({ _id: new ObjectId(), name: "Fashion Design", slug: "fashion-design", subtitle: "Have a professional design customized garments for you, end-to-end.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'fashion'})}),
        // Writing & Translation
        new Subcategory({ _id: new ObjectId(), name: "Business Copywriting", slug: "copywriting", subtitle: "Define and establish your brand voice with professional brand guidelines", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'business,writing'})}),
        new Subcategory({ _id: new ObjectId(), name: "Creative Writing", slug: "creative-writing", subtitle: "Express yourself or your brand with creative writing from poems to song lyrics", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'writing,stories'})}),
        new Subcategory({ _id: new ObjectId(), name: "Proofreading & Editing", slug: "proofreading-editing", subtitle: "Let a proofreader or editor tweak your words to perfection.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'writing'})}),
        new Subcategory({ _id: new ObjectId(), name: "Scriptwriting", slug: "script-writing", subtitle: "Script writing and screenplay feedback for your next video, audio ad, or big story", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'theatre,plays'})}),
        new Subcategory({ _id: new ObjectId(), name: "Book & eBook Writing", slug: "book-and-ebook-writing", subtitle: "Tell your story to the world with your own book or ebook.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'books,writing'})}),
        // Programming & Tech
        new Subcategory({ _id: new ObjectId(), name: "Databases", slug: "database-programming-services", subtitle: "Structure your database that it can be easily accessed, managed and updated", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'database'})}),
        new Subcategory({ _id: new ObjectId(), name: "Website Builders & CMS", slug: "web-cms-services", subtitle: "Get custom solutions, from bug fixes and landing pages to full website creation", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'website,programming'})}),
        new Subcategory({ _id: new ObjectId(), name: "Software Development", slug: "software-development", subtitle: "Add features to your website with custom web applications and extensions", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'programming,coding'})}),
        new Subcategory({ _id: new ObjectId(), name: "Mobile App Development", slug: "mobile-app-services", subtitle: "Go mobile with custom apps, site-to-app conversions, bug fixes, and more", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'mobile,coding'})}),
        new Subcategory({ _id: new ObjectId(), name: "Desktop Applications", slug: "desktop-app-services", subtitle: "Java? C++? Python? Whatever your software programming problem, find help here", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'desktop,coding'})}),
        new Subcategory({ _id: new ObjectId(), name: "Support & IT", slug: "support-it-services", subtitle: "Say hello to IT support services and goodbye to service interruptions", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'support,computer'})}),
        new Subcategory({ _id: new ObjectId(), name: "Game Development", slug: "game-development", subtitle: "Game on! Create & customize a captivating digital game that gamers will love.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'games,coding'})}),
        new Subcategory({ _id: new ObjectId(), name: "Cybersecurity", slug: "cybersecurity-data-protection", subtitle: "Protect your business and mitigate risk with cybersecurity experts.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'cybersecurity,coding'})}),
        new Subcategory({ _id: new ObjectId(), name: "Website Development", slug: "website-development", subtitle: "Create, build, and develop your website with skilled website developers", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'website,coding'})}),
        // Music & Audio
        new Subcategory({ _id: new ObjectId(), name: "Mixing & Mastering", slug: "mixing-mastering", subtitle: "Elevate your sound with top mixing & mastering engineers.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'dj,mixing'})}),
        new Subcategory({ _id: new ObjectId(), name: "Jingles & Intros", slug: "jingles-intros", subtitle: "Enrich your podcasts, commercials and radio shows with catchy jingles and intros", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'jingle,music'})}),
        new Subcategory({ _id: new ObjectId(), name: "Sound Design", slug: "sound-design", subtitle: "Engage you audience's ears with custom sound design.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'sounds'})}),
        new Subcategory({ _id: new ObjectId(), name: "Music Producers", slug: "producers", subtitle: "Need to turn your demo into a hit? You've come to the right place", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'music,producer'})}),
        new Subcategory({ _id: new ObjectId(), name: "Singers & Vocalists", slug: "singers-vocalists", subtitle: "Can't sing? We've got singers and vocalists who can do it for you", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'singing'})}),
        // Video & Animation
        new Subcategory({ _id: new ObjectId(), name: "Slideshow Videos", slug: "slideshow-videos", subtitle: "Turn your photos and presentations into video slideshows for personal or business use", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'slideshow'})}),
        new Subcategory({ _id: new ObjectId(), name: "Visual Effects", slug: "visual-effects", subtitle: "This is where the magic happens, anything from rotoscoping to digital compositing! We got you covered", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'visual,cgi'})}),
        new Subcategory({ _id: new ObjectId(), name: "Video Art", slug: "video-art", subtitle: "Express your vision through unique, original video art for any medium.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'videos'})}),
        new Subcategory({ _id: new ObjectId(), name: "Music Videos", slug: "music-videos", subtitle: "Find the pop star within. Create MTV-worthy lyric and music videos.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'music video'})}),
        // Business
        new Subcategory({ _id: new ObjectId(), name: "HR Consulting", slug: "hr-consulting", subtitle: "Get HR consulting services to hire the best team for your business.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'corporate,business'})}),
        new Subcategory({ _id: new ObjectId(), name: "Affiliate Marketing", slug: "affiliate-marketing", subtitle: "Expand your reach to more customers with affiliate marketing.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'marketing'})}),
        new Subcategory({ _id: new ObjectId(), name: "Data Entry", slug: "data-entry", subtitle: "Get help with typing and many more data entry services.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'data'})}),
        new Subcategory({ _id: new ObjectId(), name: "Career Counseling", slug: "career-counseling", subtitle: "Figure out your next move with career change advice from experts.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'counseling'})}),
        new Subcategory({ _id: new ObjectId(), name: "Project Management", slug: "project-management", subtitle: "Get your project done from start to end with expert project management services.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'manager,business'})}),
        new Subcategory({ _id: new ObjectId(), name: "Business Plans", slug: "business-plans", subtitle: "Lay a foundation for success with a professional business plan", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'business,plans'})}),
        new Subcategory({ _id: new ObjectId(), name: "Data Analysis & Reports", slug: "data-analysis-services", subtitle: "Crunch the numbers without breaking a sweat. Get custom data analysis & reports", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'data,reports'})}),
        new Subcategory({ _id: new ObjectId(), name: "Product Research", slug: "product-research2", subtitle: "Get quality research to target the right market with the best selling products.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'research'})}),
        // Lifestyle
        new Subcategory({ _id: new ObjectId(), name: "Life Coaching", slug: "life-coaching", subtitle: "Empower your journey with life coaching for personal growth and success.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'counseling'})}),
        new Subcategory({ _id: new ObjectId(), name: "Wellness", slug: "wellness", subtitle: "From workout plans to meditation, take care of your body and soul with these online wellness services.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'wellness'})}),
        new Subcategory({ _id: new ObjectId(), name: "Traveling", slug: "traveling", subtitle: "Discover top destinations with our travel services", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'travel'})}),
        new Subcategory({ _id: new ObjectId(), name: "Fitness", slug: "fitness", subtitle: "Get back in shape, slim down, build muscles - whatever your goal is, there's a freelance fitness expert ready to help you get started.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'fitness'})}),
        new Subcategory({ _id: new ObjectId(), name: "Nutrition", slug: "nutrition", subtitle: "Explore our nutrition experts that will help you reach your goals.", 
            nestedSubcategories: [], imageUrl: faker.image.urlLoremFlickr({width:940,height:512,category: 'nutrition'})})
    ];  

    // CATEGORIES
    const _categories: ICategory[] = [
        new Category({ _id: new ObjectId(), name: "Marketing & Advertising", slug: "marketing-advertising", subtitle: "Update and upgrade your business", 
            subcategories: getIds(_subcategories, 0, 6) }),
        new Category({ _id: new ObjectId(), name: "Graphics & Design", slug: "graphics-design", subtitle: "A single place, millions of creative talents", 
            subcategories: getIds(_subcategories, 7, 12) }),
        new Category({ _id: new ObjectId(), name: "Writing & Translation", slug: "writing-translation", subtitle: "Have a way with words. Get copy, translation & editorial work from freelancers", 
            subcategories: getIds(_subcategories, 13, 17) }),
        new Category({ _id: new ObjectId(), name: "Programming & Tech", slug: "programming-tech", subtitle: "Get all the technical bells and whistles without paying for a programming degree", 
            subcategories: getIds(_subcategories, 18, 26) }),
        new Category({ _id: new ObjectId(), name: "Music & Audio", slug: "music-audio", subtitle: "You've got a message. Let the world hear it with music, audio & voice services", 
            subcategories: getIds(_subcategories, 27, 31) }),
        new Category({ _id: new ObjectId(), name: "Video & Animation", slug: "video-animation", subtitle: "Your story's unique. Tell it differently with custom video & animation services", 
            subcategories: getIds(_subcategories, 32, 35) }),
        new Category({ _id: new ObjectId(), name: "Business", slug: "business", subtitle: "Your business = your passion. Outsource smaller tasks so you can focus on growth", 
            subcategories: getIds(_subcategories, 36, 43) }),
        new Category({ _id: new ObjectId(), name: "Lifestyle", slug: "lifestyle", subtitle: "Improve your quality of life with style", 
            subcategories: getIds(_subcategories, 44, 48) }),
        new Category({ _id: new ObjectId(), name: "All", slug: "all-categories", subtitle: "" }),
    ];

    try {
        await NestedSubcategory.insertMany(_nestedSubcategories);
        await Subcategory.insertMany(_subcategories);
        await Category.insertMany(_categories);
    } catch (error: any) {
        throw new Error(`Failed to seed categories: ${error}`);
    }
}


/////////////
/// USERS ///
/////////////
let userIds: any;
export const seedUsers = async () => {
    let _users: any[] = [];

    const createFakeUsers = async () => {
        const numOfUsers = 10;
        let i = 0;

        while (i < numOfUsers) {
            const user = {
                _id: new mongoose.Types.ObjectId(faker.database.mongodbObjectId()),
                fullName: {
                    firstName: faker.person.firstName(),
                    lastName: faker.person.lastName()
                },
                username: faker.internet.userName(),
                title: faker.person.jobTitle(),
                about: faker.person.bio(),
                profileImageUrl: [faker.image.urlLoremFlickr({width:940,height:512,category: 'people'})],
            }
            _users.push(user)
            i++;
        }

        userIds = _users.map((user) => user._id)
    }

    try {
        await createFakeUsers() 
        await User.insertMany(_users);
    } catch (error: any) {
        throw new Error(`Failed to seed users collections: ${error}`)
    }
}


////////////
/// GIGS ///
////////////
export const seedGigs = async () => {
    const numOfGigs = 50;
    let _gigs: IGig[] = [];

    let i = 0;
    while (i < numOfGigs) {
        const sellerIndex: number = faker.number.int({min: 0, max: userIds.length - 1});
        const subcatIndex: number = faker.number.int({min: 0, max: 6}); // only create gigs for first subcategory (for now)
        const nestedIndex: number = faker.number.int({min: 0, max: _subcategories[subcatIndex].nestedSubcategories!.length - 1});

        _gigs.push(new Gig({
            title: faker.person.jobArea(),
            description: faker.lorem.paragraph(),
            imageUrls: [],
            sellerId: userIds[sellerIndex],
            nestedId: _nestedSubcategories[nestedIndex]._id,
            publishDate: faker.date.recent({ days: 90 })
        }));
        i++;
    }

    try {
        await Gig.insertMany(_gigs);
    } catch (error: any) {
        throw new Error(`Failed to seed gigs: ${error}`);
    }
}