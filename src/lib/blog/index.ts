export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  metaDescription: string;
  content: string;
}

import { post as p1 } from "./how-much-should-a-kitchen-renovation-cost";
import { post as p2 } from "./how-to-read-a-contractor-quote";
import { post as p3 } from "./red-flags-in-contractor-quotes";
import { post as p4 } from "./how-to-negotiate-with-contractors";
import { post as p5 } from "./fair-markup-on-renovation-materials";
import { post as p6 } from "./understanding-change-orders";
import { post as p7 } from "./how-to-compare-contractor-quotes";
import { post as p8 } from "./bathroom-remodel-costs";
import { post as p9 } from "./homeowner-renovation-mistakes";
import { post as p10 } from "./protect-yourself-from-contractor-overpayment";
import { post as p11 } from "./home-renovation-payment-schedule";
import { post as p12 } from "./questions-to-ask-before-hiring-a-contractor";
import { post as p13 } from "./fixed-price-vs-time-and-materials";
import { post as p14 } from "./how-to-get-accurate-quotes-for-home-renovation-projects";
import { post as p15 } from "./how-to-budget-for-a-home-improvement-project";

// Sorted newest first
export const posts: BlogPost[] = [p15, p14, p13, p12, p11, p10, p9, p8, p7, p6, p5, p4, p3, p2, p1];
