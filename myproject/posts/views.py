from django.shortcuts import render
from .models import Post

# Create your views here.

def poster(request):
    Data = Post.objects.all()
    return render(request, 'posts/poster.html', {'posts': Data})
 
 
def post_page(request, slug):
    post = Post.objects.get(slug=slug)
    return render(request, 'posts/post_page.html', {'post': post})
 
    