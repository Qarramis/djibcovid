from django.shortcuts import render
from django.views import generic

from .models import Case
from .models import Post

# Create your views here.
def index(request):
     cases = Case.objects.all()
     posts = Post.objects.filter(status=1).order_by('-created_on')[:4]
     #posts = Post.objects.filter(status=1).order_by('-created_on')
     context = {'cases': cases, 'posts': posts}
     
     return render(request, 'index.html', context)

class PostDetail(generic.DetailView):
    model = Post
    template_name = 'post_detail.html'