import rateLimit from "express-rate-limit"

export const postLimit = rateLimit({
    windowMs: 1000 * 60 * 15,
    limit: 6,
    standardHeaders: 'draft-8',
	legacyHeaders: false,
	ipv6Subnet: 56,
})

export const loginLimiter = rateLimit({
    windowMs: 1000 * 60 * 15,
    limit: 3,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    ipv6Subnet: 56
}) 