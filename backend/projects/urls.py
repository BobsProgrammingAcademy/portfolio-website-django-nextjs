from django.urls import path
from .views import ProjectListView

urlpatterns = [
  path('', ProjectListView.as_view()),
]
