function solution(action) {
    if (action === 'upvote') {
        this.upvotes += 1;
    } else if (action === 'downvote') {
        this.downvotes += 1;
    } else if (action === 'score') {
        return calculateScore.call(this);
    }

    function calculateScore() {
        const { upvotes, downvotes } = this;
        const totalVotes = upvotes + downvotes;
        const balance = upvotes - downvotes;

        let reportedUpvotes = upvotes;
        let reportedDownvotes = downvotes;

        // Obfuscation logic
        if (totalVotes > 50) {
            const valueToAdd = Math.ceil(0.25 * Math.max(upvotes, downvotes));
            reportedUpvotes += valueToAdd;
            reportedDownvotes += valueToAdd;
        }

        // Rating logic
        let rating = '';
        if (upvotes / totalVotes > 0.66) {
            rating = 'hot';
        } else if (balance >= 0 && totalVotes > 100) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }

        if (totalVotes < 10) {
            rating = 'new';
        }

        return [reportedUpvotes, reportedDownvotes, balance, rating];
    }
}

// Sample usage:
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']

for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}

score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']
console.log(score);
