export interface Post {
    slug: string
    title: string
    date: string
    author: string
    image: string
    excerpt: string
    category: string
    tags: string[]
    content: string
}

export interface Project {
    slug: string
    name: string;
    date: string;
    url: string;
    logo: string;
    image: string;
    description: string;
    content: string;
}

export interface TeamMember {
    slug: string
    name: string;
    position: string;
    image: string;
    socialmedia: SocialMedia[];
    isVolunteerMember: boolean;
    content: string;
}

export interface SocialMedia {
    name: string;
    url: string;
}

export interface PageData {
    slug: string
    name: string;
    updated?: string;
    content: string;
}