// import {commentService} from '../services/CommentService'

// export const CommentStore = {
    
//     state: {
//         comments: [],

//     },
//     mutations: {
//         setComments(state , comments){
//             state.comments = comments
//         },
//         setComment(state , comment){
//             state.comment = comment
//         }
//     },

    
//     actions: {

//         addComment(context, comment) {
//             return commentService.add(comment)
//         },
//         fetchComments(context ) {
//             return commentService.getAll()
//                 .then(
//                     response => {
//                         context.commit('setComments', response.data)
//                     })
//         },
//         fetchComment(context, id) {
//             return commentService.get(id)
//                 .then(
//                     response => { context.commit('setComment', response.data) }
//                 )
//         },
//         // deleteComment(context,id) {
//         //     return commentService.delete(id)
//         // }

        
//     },
//     getters : {

//         comments(state){
//             return state.comments
//         },
//         comment(state){
//             return state.comment
//         }
//     }
    
// }